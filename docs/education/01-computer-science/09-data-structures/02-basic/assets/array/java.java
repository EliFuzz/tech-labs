import java.util.Arrays;

public class ArrayOperations {

  public static int accessElement(int[] arr, int index) {
    return arr[index];
  }

  public static void updateElement(int[] arr, int index, int value) {
    arr[index] = value;
  }

  public static int findLength(int[] arr) {
    return arr.length;
  }

  public static void iterateElements(int[] arr) {
    for (int element : arr) {
      System.out.println(element);
    }
  }

  public static void appendElement(int[] arr, int value) {
    arr = Arrays.copyOf(arr, arr.length + 1);
    arr[arr.length - 1] = value;
  }

  public static void insertElement(int[] arr, int index, int value) {
    int[] newArr = new int[arr.length + 1];
    System.arraycopy(arr, 0, newArr, 0, index);
    newArr[index] = value;
    System.arraycopy(arr, index, newArr, index + 1, arr.length - index);
    arr = newArr;
  }

  public static void deleteElement(int[] arr, int index) {
    int[] newArr = new int[arr.length - 1];
    System.arraycopy(arr, 0, newArr, 0, index);
    System.arraycopy(arr, index + 1, newArr, index, arr.length - index - 1);
    arr = newArr;
  }

  public static void removeElement(int[] arr, int value) {
    int indexToRemove = -1;
    for (int i = 0; i < arr.length; i++) {
      if (arr[i] == value) {
        indexToRemove = i;
        break;
      }
    }
    if (indexToRemove != -1) {
      deleteElement(arr, indexToRemove);
    }
  }

  public static int popElement(int[] arr, int index) {
    int value = arr[index];
    deleteElement(arr, index);
    return value;
  }

  public static boolean searchElement(int[] arr, int value) {
    for (int element : arr) {
      if (element == value) {
        return true;
      }
    }
    return false;
  }

  public static int indexOfElement(int[] arr, int value) {
    for (int i = 0; i < arr.length; i++) {
      if (arr[i] == value) {
        return i;
      }
    }
    return -1;
  }

  public static void sortArray(int[] arr) {
    Arrays.sort(arr);
  }

  public static void reverseArray(int[] arr) {
    for (int i = 0, j = arr.length - 1; i < j; i++, j--) {
      int temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  public static int[] copyArray(int[] arr) {
    return Arrays.copyOf(arr, arr.length);
  }

  public static int[] sliceArray(int[] arr, int start, int stop) {
    return Arrays.copyOfRange(arr, start, stop);
  }

  public static int[] concatenateArrays(int[] arr1, int[] arr2) {
    int[] result = new int[arr1.length + arr2.length];
    System.arraycopy(arr1, 0, result, 0, arr1.length);
    System.arraycopy(arr2, 0, result, arr1.length, arr2.length);
    return result;
  }
}
