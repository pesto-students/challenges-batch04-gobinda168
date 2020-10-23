function rot13(...args) {
  let newStr = '';
  const str = args.toString();
  [...str].map((s) => {
    const charToASCII = s.charCodeAt(0);
    let fromRot13ToChar;
    if (charToASCII >= 65 && charToASCII <= 77) fromRot13ToChar = charToASCII + 13;
    else if (charToASCII >= 78 && charToASCII <= 90) fromRot13ToChar = charToASCII - 13;
    else fromRot13ToChar = charToASCII;
    newStr += String.fromCharCode(fromRot13ToChar);
    return newStr;
  });
  return newStr;
}

export { rot13 };
