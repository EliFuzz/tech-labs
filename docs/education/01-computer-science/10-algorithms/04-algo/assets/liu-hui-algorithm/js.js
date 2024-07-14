function liuHui(n) {
  let sideLength = 2.0;
  let polygonSides = 6.0;
  for (let i = 0; i < n; i++) {
    sideLength = Math.sqrt(4 - Math.pow(sideLength / 2, 2));
    polygonSides *= 2;
  }
  return sideLength * polygonSides;
}
