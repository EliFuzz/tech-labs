function shape(m: any): number[] {
  const shapes: number[] = [];
  let dimension = m;
  while (dimension && Array.isArray(dimension)) {
    shapes.push(dimension.length);
    dimension = (dimension.length && [...dimension][0]) || null;
  }
  return shapes;
}

function validateType<T>(m: T[][]): void {
  if (!m || !Array.isArray(m) || !Array.isArray(m[0])) {
    throw new Error("Invalid matrix format");
  }
}

function validate2D<T>(m: T[][]): void {
  validateType(m);
  const aShape = shape(m);
  if (aShape.length !== 2) {
    throw new Error("Matrix is not of 2D shape");
  }
}

function validateSameShape(a: any, b: any): void {
  validateType(a);
  validateType(b);

  const aShape = shape(a);
  const bShape = shape(b);

  if (aShape.length !== bShape.length) {
    throw new Error("Matrices have different dimensions");
  }

  while (aShape.length && bShape.length) {
    if (aShape.pop() !== bShape.pop()) {
      throw new Error("Matrices have different shapes");
    }
  }
}

function generate(mShape: number[], fill: () => number): any {
  const generateRecursively = (
    recShape: number[],
    recIndices: number[],
  ): any => {
    if (recShape.length === 1) {
      return Array(recShape[0])
        .fill(null)
        .map((cellValue, cellIndex) => fill([...recIndices, cellIndex]));
    }
    const m: any[] = [];
    for (let i = 0; i < recShape[0]; i += 1) {
      m.push(generateRecursively(recShape.slice(1), [...recIndices, i]));
    }
    return m;
  };

  return generateRecursively(mShape, []);
}

function zeros(mShape: number[]): any {
  return generate(mShape, () => 0);
}

const dot = (a: any, b: any): any => {
  validate2D(a);
  validate2D(b);

  const aShape = shape(a);
  const bShape = shape(b);
  if (aShape[1] !== bShape[0]) {
    throw new Error("Matrices have incompatible shape for multiplication");
  }

  const outputShape = [aShape[0], bShape[1]];
  const c = zeros(outputShape);

  for (let bCol = 0; bCol < b[0].length; bCol += 1) {
    for (let aRow = 0; aRow < a.length; aRow += 1) {
      let cellSum = 0;
      for (let aCol = 0; aCol < a[aRow].length; aCol += 1) {
        cellSum += a[aRow][aCol] * b[aCol][bCol];
      }
      c[aRow][bCol] = cellSum;
    }
  }

  return c;
};

function walk(
  m: any,
  visit: (cellIndices: number[], cellValue: number) => void,
): void {
  const recWalk = (recM: any, cellIndices: number[]): void => {
    const recMShape = shape(recM);

    if (recMShape.length === 1) {
      for (let i = 0; i < recM.length; i += 1) {
        visit([...cellIndices, i], recM[i]);
      }
    }
    for (let i = 0; i < recM.length; i += 1) {
      recWalk(recM[i], [...cellIndices, i]);
    }
  };

  recWalk(m, []);
}

function getCellAtIndex(m: any, cellIndices: number[]): number {
  let cell = m[cellIndices[0]];
  for (let dimIdx = 1; dimIdx < cellIndices.length - 1; dimIdx += 1) {
    cell = cell[cellIndices[dimIdx]];
  }
  return cell[cellIndices[cellIndices.length - 1]];
}

const updateCellAtIndex = (
  m: any,
  cellIndices: number[],
  cellValue: number,
): void => {
  let cell = m[cellIndices[0]];
  for (let dimIdx = 1; dimIdx < cellIndices.length - 1; dimIdx += 1) {
    cell = cell[cellIndices[dimIdx]];
  }
  cell[cellIndices[cellIndices.length - 1]] = cellValue;
};

function add(a: any, b: any): any {
  validateSameShape(a, b);
  const result = zeros(shape(a));

  walk(a, (cellIndices, cellValue) => {
    updateCellAtIndex(result, cellIndices, cellValue);
  });

  walk(b, (cellIndices, cellValue) => {
    const currentCellValue = getCellAtIndex(result, cellIndices);
    updateCellAtIndex(result, cellIndices, currentCellValue + cellValue);
  });

  return result;
}

function mul(a: any, b: any): any {
  validateSameShape(a, b);
  const result = zeros(shape(a));

  walk(a, (cellIndices, cellValue) => {
    updateCellAtIndex(result, cellIndices, cellValue);
  });

  walk(b, (cellIndices, cellValue) => {
    const currentCellValue = getCellAtIndex(result, cellIndices);
    updateCellAtIndex(result, cellIndices, currentCellValue * cellValue);
  });

  return result;
}

function sub(a: any, b: any): any {
  validateSameShape(a, b);
  const result = zeros(shape(a));

  walk(a, (cellIndices, cellValue) => {
    updateCellAtIndex(result, cellIndices, cellValue);
  });

  walk(b, (cellIndices, cellValue) => {
    const currentCellValue = getCellAtIndex(result, cellIndices);
    updateCellAtIndex(result, cellIndices, currentCellValue - cellValue);
  });

  return result;
}
