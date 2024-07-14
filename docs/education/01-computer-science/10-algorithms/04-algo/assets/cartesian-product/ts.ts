function cartesianProduct<T>(arrays: T[][]): T[][] {
  return arrays.reduce(
    (acc, array) => {
      return acc.flatMap((res) => {
        return array.map((item) => {
          return [...res, item];
        });
      });
    },
    [[] as T[]],
  );
}
