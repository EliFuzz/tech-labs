function combineWithoutRepetitions(comboOptions, comboLength) {
  if (comboLength === 1) {
    return comboOptions.map((comboOption) => [comboOption]);
  }

  const combos = [];

  comboOptions.forEach((currentOption, optionIndex) => {
    const smallerCombos = combineWithoutRepetitions(
      comboOptions.slice(optionIndex + 1),
      comboLength - 1,
    );

    smallerCombos.forEach((smallerCombo) => {
      combos.push([currentOption].concat(smallerCombo));
    });
  });

  return combos;
}

function combineWithRepetitions(comboOptions, comboLength) {
  if (comboLength === 1) {
    return comboOptions.map((comboOption) => [comboOption]);
  }

  const combos = [];

  comboOptions.forEach((currentOption, optionIndex) => {
    const smallerCombos = combineWithRepetitions(
      comboOptions.slice(optionIndex),
      comboLength - 1,
    );

    smallerCombos.forEach((smallerCombo) => {
      combos.push([currentOption].concat(smallerCombo));
    });
  });

  return combos;
}
