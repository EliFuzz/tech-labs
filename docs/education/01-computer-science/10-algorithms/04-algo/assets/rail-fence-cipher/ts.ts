const DIRECTIONS: { [key: string]: number } = { UP: -1, DOWN: 1 };

const buildFence = (rowsNum: number): string[][] => {
  return Array.from({ length: rowsNum }, () => []);
};

const getNextDirection = ({
  railCount,
  currentRail,
  direction,
}: {
  railCount: number;
  currentRail: number;
  direction: number;
}): number => {
  if (currentRail === 0) {
    return DIRECTIONS.DOWN;
  } else if (currentRail === railCount - 1) {
    return DIRECTIONS.UP;
  } else {
    return direction;
  }
};

const fillEncodeFence = (
  fence: string[][],
  string: string,
  railCount: number,
): string[][] => {
  let currentRail = 0;
  let direction = DIRECTIONS.DOWN;

  for (const char of string) {
    fence[currentRail].push(char);
    direction = getNextDirection({ railCount, currentRail, direction });
    currentRail += direction;
  }

  return fence;
};

const fillDecodeFence = (
  fence: string[][],
  string: string,
  railCount: number,
): string[][] => {
  let currentRail = 0;
  let currentColumn = 0;
  let direction = DIRECTIONS.DOWN;

  for (const char of string) {
    fence[currentRail][currentColumn] = char;
    direction = getNextDirection({ railCount, currentRail, direction });
    currentRail += direction;
    currentColumn = (currentColumn + 1) % string.length;
  }

  return fence;
};

const decodeFence = (fence: string[][], railCount: number): string => {
  const decodedMessage: string[] = [];

  let currentRail = 0;
  let direction = DIRECTIONS.DOWN;

  for (let i = 0; i < railCount; i++) {
    decodedMessage.push(...fence[currentRail]);
    direction = getNextDirection({ railCount, currentRail, direction });
    currentRail += direction;
  }

  return decodedMessage.join("");
};

export const encodeRailFenceCipher = (
  string: string,
  railCount: number,
): string => {
  const fence = buildFence(railCount);
  fillEncodeFence(fence, string, railCount);
  return fence.flat().join("");
};

export const decodeRailFenceCipher = (
  string: string,
  railCount: number,
): string => {
  const fence = buildFence(railCount);
  fillDecodeFence(fence, string, railCount);
  return decodeFence(fence, railCount);
};
