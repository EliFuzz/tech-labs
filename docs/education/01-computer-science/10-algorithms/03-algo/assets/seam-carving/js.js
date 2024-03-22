const fs = require("fs");
const { createCanvas, loadImage } = require("canvas");

function getColorDelta(imgData, width, x1, y1, x2, y2) {
  x1 = clamp(x1, 0, width - 1);
  y1 = clamp(y1, 0, imgData.height - 1);
  x2 = clamp(x2, 0, width - 1);
  y2 = clamp(y2, 0, imgData.height - 1);

  const idx1 = (y1 * width + x1) * 4;
  const idx2 = (y2 * width + x2) * 4;

  const dr = imgData.data[idx1] - imgData.data[idx2];
  const dg = imgData.data[idx1 + 1] - imgData.data[idx2 + 1];
  const db = imgData.data[idx1 + 2] - imgData.data[idx2 + 2];

  return (dr * dr + dg * dg + db * db) / 3.0; // Taking average of the color differences
}

function computeEnergy(imgData, width) {
  const energy = [];

  for (let y = 0; y < imgData.height; y++) {
    energy.push([]);
    for (let x = 0; x < width; x++) {
      const dx = getColorDelta(imgData, width, x - 1, y, x + 1, y);
      const dy = getColorDelta(imgData, width, x, y - 1, x, y + 1);
      energy[y].push(dx * dx + dy * dy);
    }
  }

  return energy;
}

function findVerticalSeam(energy) {
  const height = energy.length;
  const width = energy[0].length;

  const distTo = new Array(height)
    .fill(null)
    .map(() => new Array(width).fill(0));
  const edgeTo = new Array(height)
    .fill(null)
    .map(() => new Array(width).fill(0));

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

  const seam = new Array(height).fill(0);
  seam[height - 1] = minEnergyIdx;
  for (let y = height - 2; y >= 0; y--) {
    seam[y] = edgeTo[y + 1][minEnergyIdx];
    minEnergyIdx = seam[y];
  }

  return seam;
}

function removeVerticalSeam(imageData, seam, width) {
  const height = imageData.height;

  for (let y = 0; y < height; y++) {
    const idx = (y * width + seam[y]) * 4;
    imageData.data.copyWithin(idx, idx + 4, idx + width * 4);
  }

  imageData.width = width;
}

function seamCarving(imagePath, outputPath, newWidth) {
  loadImage(imagePath)
    .then((image) => {
      const canvas = createCanvas(image.width, image.height);
      const ctx = canvas.getContext("2d");
      ctx.drawImage(image, 0, 0);
      const imageData = ctx.getImageData(0, 0, image.width, image.height);

      while (image.width > newWidth) {
        const energy = computeEnergy(imageData, image.width);
        const seam = findVerticalSeam(energy);
        removeVerticalSeam(imageData, seam, image.width - 1);
      }

      canvas.width = imageData.width;
      canvas.height = imageData.height;
      const newCtx = canvas.getContext("2d");
      newCtx.putImageData(imageData, 0, 0);

      const out = fs.createWriteStream(outputPath);
      const stream = canvas.createJPEGStream();
      stream.pipe(out);
      out.on("finish", () => console.log("Image resized successfully!"));
    })
    .catch((err) => console.error(err));
}
