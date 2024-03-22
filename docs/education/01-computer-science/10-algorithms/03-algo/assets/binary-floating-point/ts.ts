function floatAsBinaryString(
  floatNumber: number,
  byteLength: number = 4,
): string {
  let numberAsBinaryString: string = "";

  const buffer: ArrayBuffer = new ArrayBuffer(byteLength);
  const dataView: DataView = new DataView(buffer);

  if (byteLength === 4) {
    dataView.setFloat32(0, floatNumber, false);
  } else if (byteLength === 8) {
    dataView.setFloat64(0, floatNumber, false);
  } else {
    throw new Error("Unsupported byte length");
  }

  for (let byteIndex = 0; byteIndex < byteLength; byteIndex += 1) {
    let bits = dataView.getUint8(byteIndex).toString(2);
    if (bits.length < 8) {
      bits = "0".repeat(8 - bits.length) + bits;
    }
    numberAsBinaryString += bits;
  }

  return numberAsBinaryString;
}
