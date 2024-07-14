import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

class Point {

  double x, y;

  Point(double x, double y) {
    this.x = x;
    this.y = y;
  }
}

public class KNN {

  static List<Point> KNN(List<Point> data, Point target, int k) {
    data.sort(new ByDistance(target));
    return data.subList(0, k);
  }

  static class ByDistance implements Comparator<Point> {

    Point target;

    ByDistance(Point target) {
      this.target = target;
    }

    double distance(Point p) {
      return Math.sqrt(Math.pow(p.x - target.x, 2) + Math.pow(p.y - target.y, 2));
    }

    public int compare(Point p1, Point p2) {
      return Double.compare(distance(p1), distance(p2));
    }
  }
}
