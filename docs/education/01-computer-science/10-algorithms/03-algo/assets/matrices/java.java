import java.util.ArrayList;
import java.util.List;

public class MatrixOperations {

  public static List<Integer> shape(Object m) {
    List<Integer> shapes = new ArrayList<>();
    Object dimension = m;
    while (dimension != null && dimension instanceof Object[]) {
      shapes.add(((Object[]) dimension).length);
      dimension = (((Object[]) dimension).length > 0) ? ((Object[]) dimension)[0] : null;
    }
    return shapes;
  }

  public static void validateType(Object[] m) {
    if (m == null || m.length == 0 || !(m[0] instanceof Object[])) {
      throw new IllegalArgumentException("Invalid matrix format");
    }
  }

  public static void validate2D(Object[] m) {
    validateType(m);
    int[] aShape = shape(m);
    if (aShape.length != 2) {
      throw new IllegalArgumentException("Matrix is not of 2D shape");
    }
  }

  public static void validateSameShape(Object a, Object b) {
    validateType(a);
    validateType(b);

    List<Integer> aShape = shape(a);
    List<Integer> bShape = shape(b);

    if (aShape.size() != bShape.size()) {
      throw new IllegalArgumentException("Matrices have different dimensions");
    }

    while (!aShape.isEmpty() && !bShape.isEmpty()) {
      if (!aShape.remove(aShape.size() - 1).equals(bShape.remove(bShape.size() - 1))) {
        throw new IllegalArgumentException("Matrices have different shapes");
      }
    }
  }

  public static Object generate(List<Integer> mShape, FillFunction fill) {
    return generateRecursively(mShape, new ArrayList<>(), fill);
  }

  private static Object generateRecursively(List<Integer> recShape, List<Integer> recIndices, FillFunction fill) {
    if (recShape.size() == 1) {
      Object[] array = new Object[recShape.get(0)];
      for (int i = 0; i < recShape.get(0); i++) {
        array[i] = fill.apply(recIndices, i);
      }
      return array;
    }

    List<Object> m = new ArrayList<>();
    for (int i = 0; i < recShape.get(0); i++) {
      m.add(generateRecursively(new ArrayList<>(recShape.subList(1, recShape.size())), appendToList(recIndices, i), fill));
    }
    return m.toArray();
  }

  private static List<Integer> appendToList(List<Integer> list, Integer element) {
    List<Integer> newList = new ArrayList<>(list);
    newList.add(element);
    return newList;
  }

  public static Object zeros(List<Integer> mShape) {
    return generate(mShape, (indices, cellIndex) -> 0);
  }

  public static Object dot(Object a, Object b) {
    validate2D(a);
    validate2D(b);

    List<Integer> aShape = shape(a);
    List<Integer> bShape = shape(b);
    if (!aShape.get(1).equals(bShape.get(0))) {
      throw new IllegalArgumentException("Matrices have incompatible shape for multiplication");
    }

    List<Integer> outputShape = new ArrayList<>();
    outputShape.add(aShape.get(0));
    outputShape.add(bShape.get(1));
    Object c = zeros(outputShape);

    for (int bCol = 0; bCol < ((Object[]) b)[0].length; bCol++) {
      for (int aRow = 0; aRow < ((Object[]) a).length; aRow++) {
        int cellSum = 0;
        for (int aCol = 0; aCol < ((Object[]) a)[aRow].length; aCol++) {
          cellSum += (int) (((Object[]) a)[aRow][aCol]) * ((int[][]) b)[aCol][bCol];
        }
        ((int[][]) c)[aRow][bCol] = cellSum;
      }
    }
    return c;
  }

  public static void walk(Object m, VisitFunction visit) {
    recWalk(m, new ArrayList<>(), visit);
  }

  private static void recWalk(Object recM, List<Integer> cellIndices, VisitFunction visit) {
    List<Integer> recMShape = shape(recM);

    if (recMShape.size() == 1) {
      for (int i = 0; i < ((Object[]) recM).length; i++) {
        visit.apply(appendToList(cellIndices, i), ((Object[]) recM)[i]);
      }
    }

    for (int i = 0; i < ((Object[]) recM).length; i++) {
      recWalk(((Object[]) recM)[i], appendToList(cellIndices, i), visit);
    }
  }

  public static Object getCellAtIndex(Object m, List<Integer> cellIndices) {
    Object cell = ((Object[]) m)[cellIndices.get(0)];
    for (int dimIdx = 1; dimIdx < cellIndices.size() - 1; dimIdx++) {
      cell = ((Object[]) cell)[cellIndices.get(dimIdx)];
    }
    return ((Object[]) cell)[cellIndices.get(cellIndices.size() - 1)];
  }

  public static void updateCellAtIndex(Object m, List<Integer> cellIndices, Object cellValue) {
    Object cell = ((Object[]) m)[cellIndices.get(0)];
    for (int dimIdx = 1; dimIdx < cellIndices.size() - 1; dimIdx++) {
      cell = ((Object[]) cell)[cellIndices.get(dimIdx)];
    }
    ((Object[]) cell)[cellIndices.get(cellIndices.size() - 1)] = cellValue;
  }

  public static Object add(Object a, Object b) {
    validateSameShape(a, b);
    Object result = zeros(shape(a));

    walk(a, (cellIndices, cellValue) -> {
      updateCellAtIndex(result, cellIndices, cellValue);
    });

    walk(b, (cellIndices, cellValue) -> {
      Object currentCellValue = getCellAtIndex(result, cellIndices);
      updateCellAtIndex(result, cellIndices, (int) currentCellValue + (int) cellValue);
    });

    return result;
  }

  public static Object mul(Object a, Object b) {
    validateSameShape(a, b);
    Object result = zeros(shape(a));

    walk(a, (cellIndices, cellValue) -> {
      updateCellAtIndex(result, cellIndices, cellValue);
    });

    walk(b, (cellIndices, cellValue) -> {
      Object currentCellValue = getCellAtIndex(result, cellIndices);
      updateCellAtIndex(result, cellIndices, (int) currentCellValue * (int) cellValue);
    });

    return result;
  }

  public static Object sub(Object a, Object b) {
    validateSameShape(a, b);
    Object result = zeros(shape(a));

    walk(a, (cellIndices, cellValue) -> {
      updateCellAtIndex(result, cellIndices, cellValue);
    });

    walk(b, (cellIndices, cellValue) -> {
      Object currentCellValue = getCellAtIndex(result, cellIndices);
      updateCellAtIndex(result, cellIndices, (int) currentCellValue - (int) cellValue);
    });

    return result;
  }

  private static void validateType(Object matrix) {
    if (!(matrix instanceof Object[])) {
      throw new IllegalArgumentException("Input is not a matrix");
    }
  }

  private static void validate2D(Object matrix) {
    if (!(matrix instanceof Object[]) || !(((Object[]) matrix)[0] instanceof Object[])) {
      throw new IllegalArgumentException("Input is not a 2D matrix");
    }
  }

  interface FillFunction {

    Object apply(List<Integer> indices, int cellIndex);
  }

  interface VisitFunction {

    void apply(List<Integer> cellIndices, Object cellValue);
  }
}
