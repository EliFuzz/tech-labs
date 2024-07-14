class Point {
  constructor(
    public x: number,
    public y: number,
  ) {}
}

class Centroid {
  constructor(
    public x: number,
    public y: number,
  ) {}
}

function kMeans(points: Point[], k: number): Centroid[] {
  let centroids: Centroid[] = points
    .slice(0, k)
    .map((p) => new Centroid(p.x, p.y));

  while (true) {
    let clusters: Point[][] = new Array(k).fill(null).map(() => []);

    for (let point of points) {
      let nearestIdx = 0;
      let nearestDist = Infinity;
      for (let i = 0; i < k; i++) {
        let centroid = centroids[i];
        let dist =
          Math.pow(point.x - centroid.x, 2) + Math.pow(point.y - centroid.y, 2);
        if (dist < nearestDist) {
          nearestIdx = i;
          nearestDist = dist;
        }
      }
      clusters[nearestIdx].push(point);
    }

    let newCentroids: Centroid[] = [];
    for (let cluster of clusters) {
      let sumX = cluster.reduce((acc, p) => acc + p.x, 0);
      let sumY = cluster.reduce((acc, p) => acc + p.y, 0);
      newCentroids.push(
        new Centroid(sumX / cluster.length, sumY / cluster.length),
      );
    }

    if (converged(centroids, newCentroids)) {
      break;
    }
    centroids = newCentroids;
  }

  return centroids;
}

function converged(
  oldCentroids: Centroid[],
  newCentroids: Centroid[],
): boolean {
  return oldCentroids.every(
    (old, i) =>
      Math.abs(old.x - newCentroids[i].x) < 1e-6 &&
      Math.abs(old.y - newCentroids[i].y) < 1e-6,
  );
}
