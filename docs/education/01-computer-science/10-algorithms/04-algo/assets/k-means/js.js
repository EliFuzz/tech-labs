class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Centroid {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function kMeans(points, k) {
  let centroids = [];
  for (let i = 0; i < k; i++) {
    centroids.push(new Centroid(points[i].x, points[i].y));
  }

  while (true) {
    let clusters = new Array(k).fill().map(() => []);

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

    let newCentroids = [];
    for (let cluster of clusters) {
      let sumX = 0,
        sumY = 0;
      for (let point of cluster) {
        sumX += point.x;
        sumY += point.y;
      }
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

function converged(oldCentroids, newCentroids) {
  for (let i = 0; i < oldCentroids.length; i++) {
    if (
      Math.abs(oldCentroids[i].x - newCentroids[i].x) > 1e-6 ||
      Math.abs(oldCentroids[i].y - newCentroids[i].y) > 1e-6
    ) {
      return false;
    }
  }
  return true;
}
