function combineWithoutRepetitions(
  comboOptions: number[],
  comboLength: number,
): number[][] {
  const combos: number[][] = [];
  if (comboLength === 1) {
    for (const comboOption of comboOptions) {
      combos.push([comboOption]);
    }
  } else {
    for (let i = 0; i <= comboOptions.length - comboLength; i++) {
      const currentOption = comboOptions[i];
      const smallerCombos = combineWithoutRepetitions(
        comboOptions.slice(i + 1),
        comboLength - 1,
      );
      for (const smallerCombo of smallerCombos) {
        combos.push([currentOption, ...smallerCombo]);
      }
    }
  }
  return combos;
}

function combineWithRepetitions(
  comboOptions: number[],
  comboLength: number,
): number[][] {
  const combos: number[][] = [];
  if (comboLength === 1) {
    for (const comboOption of comboOptions) {
      combos.push([comboOption]);
    }
  } else {
    for (let i = 0; i < comboOptions.length; i++) {
      const currentOption = comboOptions[i];
      const smallerCombos = combineWithRepetitions(
        comboOptions.slice(i),
        comboLength - 1,
      );
      for (const smallerCombo of smallerCombos) {
        combos.push([currentOption, ...smallerCombo]);
      }
    }
  }
  return combos;
}
