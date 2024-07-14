function trialDivision(number) {
  if (number <= 1 || (number % 2 === 0 && number !== 2)) {
    return false;
  }

  const dividerLimit = Math.sqrt(number);
  for (let divider = 3; divider <= dividerLimit; divider += 2) {
    if (number % divider === 0) {
      return false;
    }
  }

  return true;
}
