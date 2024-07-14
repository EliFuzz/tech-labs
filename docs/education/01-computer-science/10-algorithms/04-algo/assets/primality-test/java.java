public class Main {

  public static boolean trialDivision(int number) {
    if (number <= 1 || (number % 2 == 0 && number != 2)) {
      return false;
    }

    int dividerLimit = (int) Math.sqrt(number);
    for (int divider = 3; divider <= dividerLimit; divider += 2) {
      if (number % divider == 0) {
        return false;
      }
    }

    return true;
  }
}
