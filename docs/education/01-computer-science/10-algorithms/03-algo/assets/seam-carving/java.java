import java.awt.Color;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import javax.imageio.ImageIO;

public class SeamCarving {

  static class EnergyMatrix {
    double[][] energy;

    public EnergyMatrix(int height, int width) {
      energy = new double[height][width];
    }
  }

  public static BufferedImage resizeImage(BufferedImage image, int newWidth) {
    int width = image.getWidth();
    int height = image.getHeight();

    while (width > newWidth) {
      EnergyMatrix energyMatrix = computeEnergy(image);
      int[] seam = findVerticalSeam(energyMatrix);

      removeVerticalSeam(image, seam);

      width--;
    }

    return image;
  }

  public static EnergyMatrix computeEnergy(BufferedImage image) {
    int width = image.getWidth();
    int height = image.getHeight();
    EnergyMatrix energyMatrix = new EnergyMatrix(height, width);

    for (int y = 0; y < height; y++) {
      for (int x = 0; x < width; x++) {
        double dx = getColorDelta(image, x - 1, y, x + 1, y);
        double dy = getColorDelta(image, x, y - 1, x, y + 1);
        energyMatrix.energy[y][x] = dx * dx + dy * dy;
      }
    }

    return energyMatrix;
  }

  public static double getColorDelta(BufferedImage image, int x1, int y1, int x2, int y2) {
    x1 = clamp(x1, 0, image.getWidth() - 1);
    y1 = clamp(y1, 0, image.getHeight() - 1);
    x2 = clamp(x2, 0, image.getWidth() - 1);
    y2 = clamp(y2, 0, image.getHeight() - 1);

    Color c1 = new Color(image.getRGB(x1, y1));
    Color c2 = new Color(image.getRGB(x2, y2));

    double dr = c1.getRed() - c2.getRed();
    double dg = c1.getGreen() - c2.getGreen();
    double db = c1.getBlue() - c2.getBlue();

    return (dr * dr + dg * dg + db * db) / 3.0; // Taking average of the color differences
  }

  public static int clamp(int x, int min, int max) {
    return Math.min(Math.max(x, min), max);
  }

  public static int[] findVerticalSeam(EnergyMatrix energyMatrix) {
    int height = energyMatrix.energy.length;
    int width = energyMatrix.energy[0].length;

    double[][] distTo = new double[height][width];
    int[][] edgeTo = new int[height][width];

    for (int y = 0; y < height; y++) {
      for (int x = 0; x < width; x++) {
        distTo[y][x] = y == 0 ? energyMatrix.energy[y][x] : Double.MAX_VALUE;
      }
    }

    for (int y = 0; y < height - 1; y++) {
      for (int x = 0; x < width; x++) {
        if (x > 0 && distTo[y + 1][x - 1] > distTo[y][x] + energyMatrix.energy[y + 1][x - 1]) {
          distTo[y + 1][x - 1] = distTo[y][x] + energyMatrix.energy[y + 1][x - 1];
          edgeTo[y + 1][x - 1] = x;
        }
        if (distTo[y + 1][x] > distTo[y][x] + energyMatrix.energy[y + 1][x]) {
          distTo[y + 1][x] = distTo[y][x] + energyMatrix.energy[y + 1][x];
          edgeTo[y + 1][x] = x;
        }
        if (x < width - 1 && distTo[y + 1][x + 1] > distTo[y][x] + energyMatrix.energy[y + 1][x + 1]) {
          distTo[y + 1][x + 1] = distTo[y][x] + energyMatrix.energy[y + 1][x + 1];
          edgeTo[y + 1][x + 1] = x;
        }
      }
    }

    int minEnergyIdx = 0;
    double minEnergy = distTo[height - 1][0];
    for (int x = 1; x < width; x++) {
      if (distTo[height - 1][x] < minEnergy) {
        minEnergy = distTo[height - 1][x];
        minEnergyIdx = x;
      }
    }

    int[] seam = new int[height];
    seam[height - 1] = minEnergyIdx;
    for (int y = height - 2; y >= 0; y--) {
      seam[y] = edgeTo[y + 1][minEnergyIdx];
      minEnergyIdx = seam[y];
    }

    return seam;
  }

  public static void removeVerticalSeam(BufferedImage image, int[] seam) {
    int width = image.getWidth();
    int height = image.getHeight();

    for (int y = 0; y < height; y++) {
      System.arraycopy(image.getRGB(seam[y] + 1, y, width - seam[y] - 1, 1, image.getRGB(seam[y], y, 1, 1),
          0, width - seam[y] - 1);
    }
    image.getRaster().setWidth(width - 1);
  }
}
