class Point {
  constructor(
    public x: number,
    public y: number,
  ) {}
}

function distance(p1: Point, p2: Point): number {
  return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}

function KNN(data: Point[], target: Point, k: number): Point[] {
  return data
    .sort((a, b) => distance(a, target) - distance(b, target))
    .slice(0, k);
}
