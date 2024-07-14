function cartesianProduct(arrays) {
  return arrays.reduce(
    (acc, array) => {
      return acc.flatMap((res) => {
        return array.map((item) => {
          return res.concat(item);
        });
      });
    },
    [[]],
  );
}
