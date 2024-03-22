function caesarCipher(text: string, shift: number): string {
  return text.replace(/[a-zA-Z]/g, (char: string) => {
    const baseCharCode = char <= "Z" ? 65 : 97;
    return String.fromCharCode(
      ((char.charCodeAt(0) - baseCharCode + shift) % 26) + baseCharCode,
    );
  });
}
