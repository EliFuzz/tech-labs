import { createCanvas, ImageData, loadImage } from "canvas";

function getColorDelta(
  imageData: ImageData,
  width: number,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
): number {
  x1 = Math.min(Math.max(x1, 0), width - 1);
  y1 = Math.min(Math.max(y1, 0), imageData.height - 1);
  x2 = Math.min(Math.max(x2, 0), width - 1);
  y2 = Math.min(Math.max(y2, 0), imageData.height - 1);

  const idx1 = (y1 * width + x1) * 4;
  const idx2 = (y2 * width + x2) * 4;

  const dr = imageData.data[idx1] - imageData.data[idx2];
  const dg = imageData.data[idx1 + 1] - imageData.data[idx2 + 1];
  const db = imageData.data[idx1 + 2] - imageData.data[idx2 + 2];

  return (dr * dr + dg * dg + db * db) / 3.0; // Taking average of the color differences
}

function computeEnergy(imageData: ImageData, width: number): number[][] {
  const energy: number[][] = [];

  for (let y = 0; y < imageData.height; y++) {
    energy.push([]);
    for (let x = 0; x < width; x++) {
      const dx = getColorDelta(imageData, width, x - 1, y, x + 1, y);
      const dy = getColorDelta(imageData, width, x, y - 1, x, y + 1);
      energy[y].push(dx * dx + dy * dy);
    }
  }

  return energy;
}

function findVerticalSeam(energy: number[][]): number[] {
  const height = energy.length;
  const width = energy[0].length;

  const distTo: number[][] = Array.from({ length: height }, () =>
    Array(width).fill(0),
  );
  const edgeTo: number[][] = Array.from({ length: height }, () =>
    Array(width).fill(0),
  );

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      distTo[y][x] = y === 0 ? energy[y][x] : Infinity;
    }
  }

  for (let y = 0; y < height - 1; y++) {
    for (let x = 0; x < width; x++) {
      if (x > 0 && distTo[y + 1][x - 1] > distTo[y][x] + energy[y + 1][x - 1]) {
        distTo[y + 1][x - 1] = distTo[y][x] + energy[y + 1][x - 1];
        edgeTo[y + 1][x - 1] = x;
      }
      if (distTo[y + 1][x] > distTo[y][x] + energy[y + 1][x]) {
        distTo[y + 1][x] = distTo[y][x] + energy[y + 1][x];
        edgeTo[y + 1][x] = x;
      }
      if (
        x < width - 1 &&
        distTo[y + 1][x + 1] > distTo[y][x] + energy[y + 1][x + 1]
      ) {
        distTo[y + 1][x + 1] = distTo[y][x] + energy[y + 1][x + 1];
        edgeTo[y + 1][x + 1] = x;
      }
    }
  }

  let minEnergyIdx = 0;
  let minEnergy = distTo[height - 1][0];
  for (let x = 1; x < width; x++) {
    if (distTo[height - 1][x] < minEnergy) {
      minEnergy = distTo[height - 1][x];
      minEnergyIdx = x;
    }
  }

  const seam: number[] = [];
  seam[height - 1] = minEnergyIdx;
  for (let y = height - 2; y >= 0; y--) {
    seam[y] = edgeTo[y + 1][minEnergyIdx];
    minEnergyIdx = seam[y];
  }

  return seam;
}

function removeVerticalSeam(imageData: ImageData, seam: number[]): ImageData {
  const width = imageData.width;
  const height = imageData.height;
  const newImageData = new ImageData(width - 1, height);

  for (let y = 0; y < height; y++) {
    let destIndex = 0;
    for (let x = 0; x < width; x++) {
      if (x !== seam[y]) {
        newImageData.data[destIndex++] = imageData.data[y * width * 4 + x * 4];
        newImageData.data[destIndex++] =
          imageData.data[y * width * 4 + x * 4 + 1];
        newImageData.data[destIndex++] =
          imageData.data[y * width * 4 + x * 4 + 2];
        newImageData.data[destIndex++] =
          imageData.data[y * width * 4 + x * 4 + 3];
      }
    }
  }

  return newImageData;
}

async function seamCarving(
  inputImagePath: string,
  outputImagePath: string,
  newWidth: number,
) {
  const image = await loadImage(inputImagePath);
  const canvas = createCanvas(image.width, image.height);
  const ctx = canvas.getContext("2d");
  ctx.drawImage(image, 0, 0);
  const imageData = ctx.getImageData(0, 0, image.width, image.height);

  while (imageData.width > newWidth) {
    const energy = computeEnergy(imageData, imageData.width);
    const seam = findVerticalSeam(energy);
    imageData.width -= 1;
    imageData.data = removeVerticalSeam(imageData, seam).data;
  }

  canvas.width = imageData.width;
  const newCtx = canvas.getContext("2d");
  newCtx.putImageData(imageData, 0, 0);

  const buffer = canvas.toBuffer("image/jpeg");
  require("fs").writeFileSync(outputImagePath, buffer);
  console.log("Image resized successfully!");
}
