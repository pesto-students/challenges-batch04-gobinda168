function duplicateLetters(...args) {
  const x = {};
  const str = args.toString();
  for (let i = 0; i < str.length; i += 1) {
    let count = 0;
    for (let j = 0; j < str.length; j += 1) {
      if (str[i] === str[j]) {
        x[str[i]] = count + 1;
        count += 1;
      }
    }
  }
  const res = Object.keys(x).sort((a, b) => x[b] - x[a])[0];
  return x[res] > 1 ? x[res] : false;
}

export { duplicateLetters };
