function abbreviateString(str) {
  if (typeof str !== "string") throw new Error("invalid parameters");
  const wordsFromString = str.split(" ");
  const newString = `${wordsFromString[0]} ${wordsFromString[
    wordsFromString.length - 1
  ]
    .slice(0, 1)
    .toUpperCase()}.`;
  return newString;
}

export { abbreviateString };
