function caesarCipher(text, shift) {
  return text.replace(/[a-zA-Z]/g, function (char) {
    const baseCharCode = char <= "Z" ? 65 : 97;
    return String.fromCharCode(
      ((char.charCodeAt(0) - baseCharCode + shift) % 26) + baseCharCode,
    );
  });
}
