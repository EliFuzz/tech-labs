import java.nio.ByteBuffer;

public class Main {

  public static String floatAsBinaryString(float floatNumber, int byteLength) {
    StringBuilder numberAsBinaryString = new StringBuilder();

    ByteBuffer buffer = ByteBuffer.allocate(byteLength);
    buffer.putFloat(floatNumber);

    for (byte b : buffer.array()) {
      numberAsBinaryString.append(String.format("%8s", Integer.toBinaryString(b & 0xFF)).replace(' ', '0'));
    }

    return numberAsBinaryString.toString();
  }
}
