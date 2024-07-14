function weightedRandom(items) {
  const totalWeight = items.reduce((acc, item) => acc + item.weight, 0);
  let randomWeight = Math.floor(Math.random() * totalWeight);

  for (const item of items) {
    if (randomWeight < item.weight) {
      return item.item;
    }
    randomWeight -= item.weight;
  }

  return null;
}
