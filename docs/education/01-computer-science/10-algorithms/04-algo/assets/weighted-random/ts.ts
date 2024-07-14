class WeightedItem<T> {
  constructor(
    public item: T,
    public weight: number,
  ) {}
}

function weightedRandom<T>(items: WeightedItem<T>[]): T | null {
  const totalWeight = items.reduce((acc, item) => acc + item.weight, 0);
  const randomWeight = Math.floor(Math.random() * totalWeight);

  let cumulativeWeight = 0;
  for (const item of items) {
    cumulativeWeight += item.weight;
    if (randomWeight < cumulativeWeight) {
      return item.item;
    }
  }

  return null;
}
