import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

class RTreeNode {

  boolean isLeaf;
  List<double[]> children;
  double[] boundingBox;

  RTreeNode(boolean isLeaf) {
    this.isLeaf = isLeaf;
    this.children = new ArrayList<>();
    this.boundingBox = null;
  }
}

public class RTree {

  private RTreeNode root;
  private int maxChildren;

  public RTree(int maxChildren) {
    this.root = new RTreeNode(true);
    this.maxChildren = maxChildren;
  }

  public static void printNodeInfo(RTreeNode node, int depth) {
    String indentation = "  ".repeat(depth);
    if (node.isLeaf) {
      System.out.println(indentation + "Leaf Node Bounding Box: " + Arrays.toString(node.boundingBox));
    } else {
      System.out.println(indentation + "Internal Node Bounding Box: " + Arrays.toString(node.boundingBox));
    }
  }

  public void insert(double[] point) {
    insertRecursive(root, point);
  }

  private void insertRecursive(RTreeNode node, double[] point) {
    if (node.isLeaf) {
      node.children.add(point);
      if (node.children.size() > maxChildren) {
        split(node);
      }
    } else {
      double minIncrease = Double.POSITIVE_INFINITY;
      double[] bestChild = null;

      for (double[] child : node.children) {
        double[] childBBox = calculateBoundingBox(child);
        double[] expandedBBox = calculateExpandedBoundingBox(childBBox, point);
        double increase = calculateAreaIncrease(childBBox, expandedBBox);

        if (increase < minIncrease) {
          minIncrease = increase;
          bestChild = child;
        }
      }

      insertRecursive(node, point);
    }
  }

  private double calculateAreaIncrease(double[] oldBBox, double[] newBBox) {
    double oldArea = (oldBBox[2] - oldBBox[0]) * (oldBBox[3] - oldBBox[1]);
    double newArea = (newBBox[2] - newBBox[0]) * (newBBox[3] - newBBox[1]);
    return newArea - oldArea;
  }

  private double[] calculateExpandedBoundingBox(double[] oldBBox, double[] point) {
    double min_x = Math.min(oldBBox[0], point[0]);
    double min_y = Math.min(oldBBox[1], point[1]);
    double max_x = Math.max(oldBBox[2], point[0]);
    double max_y = Math.max(oldBBox[3], point[1]);
    return new double[]{min_x, min_y, max_x, max_y};
  }

  private void split(RTreeNode node) {
    int splitPoint = node.children.size() / 2;
    RTreeNode newNode = new RTreeNode(node.isLeaf);
    newNode.children.addAll(node.children.subList(splitPoint, node.children.size()));
    node.children.subList(0, splitPoint).clear();

    node.boundingBox = calculateBoundingBox(node.children);
    newNode.boundingBox = calculateBoundingBox(newNode.children);

    if (node == root) {
      RTreeNode newRoot = new RTreeNode(false);
      newRoot.children.add(node);
      newRoot.children.add(newNode);
      newRoot.boundingBox = calculateBoundingBox(newRoot.children);
      root = newRoot;
    }
  }

  public void delete(double[] point) {
    deleteRecursive(root, point);
  }

  private void deleteRecursive(RTreeNode node, double[] point) {
    if (node.isLeaf) {
      node.children.removeIf(p -> Arrays.equals(p, point));
    } else {
      for (double[] child : node.children) {
        double[] childBBox = calculateBoundingBox(child);
        if (pointInBoundingBox(point, childBBox)) {
          deleteRecursive(child, point);
          break;
        }
      }
      node.boundingBox = calculateBoundingBox(node.children);
    }
  }

  public List<double[]> search(double[] queryBBox) {
    List<double[]> result = new ArrayList<>();
    searchRecursive(root, queryBBox, result);
    return result;
  }

  private void searchRecursive(RTreeNode node, double[] queryBBox, List<double[]> result) {
    if (node.isLeaf) {
      for (double[] point : node.children) {
        if (pointInBoundingBox(point, queryBBox)) {
          result.add(point);
        }
      }
    } else {
      for (double[] child : node.children) {
        double[] childBBox = calculateBoundingBox(child);
        if (bboxIntersectsQuery(childBBox, queryBBox)) {
          searchRecursive(child, queryBBox, result);
        }
      }
    }
  }

  public List<double[]> nearestNeighbors(double[] queryPoint, int k) {
    List<double[]> result = new ArrayList<>();
    nearestNeighborsRecursive(root, queryPoint, k, result);
    Collections.sort(result, Comparator.comparingDouble(p -> p[0]));
    return result.subList(0, Math.min(k, result.size()));
  }

  private void nearestNeighborsRecursive(RTreeNode node, double[] queryPoint, int k, List<double[]> result) {
    if (node.isLeaf) {
      for (double[] point : node.children) {
        updateNearestNeighbors(queryPoint, point, k, result);
      }
    } else {
      List<double[]> sortedChildren = new ArrayList<>(node.children);
      sortedChildren.sort(Comparator.comparingDouble(child -> distance(queryPoint, calculateBoundingBox(child))));

      for (double[] child : sortedChildren) {
        double[] childBBox = calculateBoundingBox(child);
        if (distance(queryPoint, childBBox) < result.get(result.size() - 1)[0]) {
          nearestNeighborsRecursive(child, queryPoint, k, result);
        }
      }
    }
  }

  private void updateNearestNeighbors(double[] queryPoint, double[] point, int k, List<double[]> result) {
    double distance = distance(queryPoint, point);

    if (result.size() < k) {
      result.add(new double[]{distance, point[0], point[1]});
      result.sort(Comparator.comparingDouble(p -> p[0]));
    } else if (distance < result.get(result.size() - 1)[0]) {
      result.set(result.size() - 1, new double[]{distance, point[0], point[1]});
      result.sort(Comparator.comparingDouble(p -> p[0]));
    }
  }

  public List<double[]> rangeQuery(double[] queryBBox) {
    List<double[]> result = new ArrayList<>();
    rangeQueryRecursive(root, queryBBox, result);
    return result;
  }

  private void rangeQueryRecursive(RTreeNode node, double[] queryBBox, List<double[]> result) {
    if (node.isLeaf) {
      for (double[] point : node.children) {
        if (pointInBoundingBox(point, queryBBox)) {
          result.add(point);
        }
      }
    } else {
      for (double[] child : node.children) {
        double[] childBBox = calculateBoundingBox(child);
        if (bboxIntersectsQuery(childBBox, queryBBox)) {
          rangeQueryRecursive(child, queryBBox, result);
        }
      }
    }
  }

  public List<double[]> windowQuery(double[] queryBBox) {
    List<double[]> result = new ArrayList<>();
    windowQueryRecursive(root, queryBBox, result);
    return result;
  }

  private void windowQueryRecursive(RTreeNode node, double[] queryBBox, List<double[]> result) {
    if (node.isLeaf) {
      for (double[] point : node.children) {
        if (pointInBoundingBox(point, queryBBox)) {
          result.add(point);
        }
      }
    } else {
      for (double[] child : node.children) {
        double[] childBBox = calculateBoundingBox(child);
        if (bboxFullyContained(childBBox, queryBBox)) {
          windowQueryRecursive(child, queryBBox, result);
        }
      }
    }
  }

  public List<double[]> knnQuery(double[] queryPoint, int k) {
    List<double[]> result = new ArrayList<>();
    knnSearch(root, queryPoint, k, result);
    Collections.sort(result, Comparator.comparingDouble(p -> p[1]));
    return result.subList(0, Math.min(k, result.size()));
  }

  private void knnSearch(RTreeNode node, double[] queryPoint, int k, List<double[]> result) {
    if (node.isLeaf) {
      for (double[] child : node.children) {
        result.add(new double[]{distance(queryPoint, calculateBoundingBox(child)), child[0], child[1]});
      }
    } else {
      List<double[]> distances = new ArrayList<>();
      for (double[] child : node.children) {
        double[] childBBox = calculateBoundingBox(child);
        distances.add(new double[]{distance(queryPoint, childBBox)});
      }
      distances.sort(Comparator.comparingDouble(p -> p[1]));

      for (double[] distance : distances.subList(0, Math.min(k, distances.size()))) {
        knnSearch(node, queryPoint, k, result);
      }
    }
  }

  private double distance(double[] point1, double[] point2) {
    return Math.sqrt(Math.pow(point1[0] - point2[0], 2) + Math.pow(point1[1] - point2[1], 2));
  }

  public void update(double[] oldPoint, double[] newPoint) {
    recursiveUpdate(root, oldPoint, newPoint);
  }

  private void recursiveUpdate(RTreeNode node, double[] oldPoint, double[] newPoint) {
    if (node.isLeaf) {
      for (int i = 0; i < node.children.size(); i++) {
        double[] child = node.children.get(i);
        if (Arrays.equals(child, oldPoint)) {
          node.children.set(i, newPoint);
          return;
        }
      }
    } else {
      for (RTreeNode child : node.children) {
        if (intersects(child.boundingBox, oldPoint)) {
          recursiveUpdate(child, oldPoint, newPoint);
        }
      }
    }
  }

  private boolean intersects(double[] box1, double[] box2) {
    return !(box1[2] < box2[0] || box1[0] > box2[2] || box1[3] < box2[1] || box1[1] > box2[3]);
  }

  public void traverse(VisitFunction visitFunction) {
    recursiveTraverse(root, visitFunction);
  }

  private void recursiveTraverse(RTreeNode node, VisitFunction visitFunction) {
    visitFunction.visit(node);
    if (!node.isLeaf) {
      for (RTreeNode child : node.children) {
        recursiveTraverse(child, visitFunction);
      }
    }
  }

  public interface VisitFunction {

    void visit(RTreeNode node);
  }
}
