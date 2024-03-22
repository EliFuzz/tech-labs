function floatAsBinaryString(floatNumber, byteLength = 4) {
  const singlePrecisionBytesLength = 4; // double precision is 8
  const bitsInByte = 8;
  let numberAsBinaryString = "";

  const arrayBuffer = new ArrayBuffer(byteLength);
  const dataView = new DataView(arrayBuffer);

  const byteOffset = 0;
  const littleEndian = false;

  if (byteLength === singlePrecisionBytesLength) {
    dataView.setFloat32(byteOffset, floatNumber, littleEndian);
  } else {
    dataView.setFloat64(byteOffset, floatNumber, littleEndian);
  }

  for (let byteIndex = 0; byteIndex < byteLength; byteIndex += 1) {
    let bits = dataView.getUint8(byteIndex).toString(2);
    if (bits.length < bitsInByte) {
      bits = new Array(bitsInByte - bits.length).fill("0").join("") + bits;
    }
    numberAsBinaryString += bits;
  }

  return numberAsBinaryString;
}
