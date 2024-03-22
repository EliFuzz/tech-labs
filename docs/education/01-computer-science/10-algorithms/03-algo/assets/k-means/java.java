import java.util.ArrayList;
import java.util.List;

class Point {

  double x, y;

  Point(double x, double y) {
    this.x = x;
    this.y = y;
  }
}

class Centroid {

  double x, y;

  Centroid(double x, double y) {
    this.x = x;
    this.y = y;
  }
}

public class KMeans {

  public static List<Centroid> kMeans(List<Point> points, int k) {
    List<Centroid> centroids = new ArrayList<>();
    for (int i = 0; i < k; i++) {
      centroids.add(new Centroid(points.get(i).x, points.get(i).y));
    }

    while (true) {
      List<List<Point>> clusters = new ArrayList<>();
      for (int i = 0; i < k; i++) {
        clusters.add(new ArrayList<>());
      }

      for (Point point : points) {
        int nearestIdx = 0;
        double nearestDist = Double.POSITIVE_INFINITY;
        for (int i = 0; i < k; i++) {
          Centroid centroid = centroids.get(i);
          double dist = Math.pow(point.x - centroid.x, 2) + Math.pow(point.y - centroid.y, 2);
          if (dist < nearestDist) {
            nearestIdx = i;
            nearestDist = dist;
          }
        }
        clusters.get(nearestIdx).add(point);
      }

      List<Centroid> newCentroids = new ArrayList<>();
      for (List<Point> cluster : clusters) {
        double sumX = 0, sumY = 0;
        for (Point point : cluster) {
          sumX += point.x;
          sumY += point.y;
        }
        newCentroids.add(new Centroid(sumX / cluster.size(), sumY / cluster.size()));
      }

      if (converged(centroids, newCentroids)) {
        break;
      }
      centroids = newCentroids;
    }

    return centroids;
  }

  public static boolean converged(List<Centroid> oldCentroids, List<Centroid> newCentroids) {
    for (int i = 0; i < oldCentroids.size(); i++) {
      if (Math.abs(oldCentroids.get(i).x - newCentroids.get(i).x) > 1e-6 ||
          Math.abs(oldCentroids.get(i).y - newCentroids.get(i).y) > 1e-6) {
        return false;
      }
    }
    return true;
  }
}
