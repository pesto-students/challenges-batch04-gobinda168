const sumEvenArgs = (...args) => {
  let sumOfEvenArguments = 0;
  for (const arg of [...args]) {
    // eslint-disable-next-line max-len
    // if (typeof args !== 'number' || typeof args !== 'bigint') return new Error()`Error: Number Expected. Recieved ${typeof arg}`);
    if (arg % 2 === 0) sumOfEvenArguments += arg;
  }
  return sumOfEvenArguments;
};

export { sumEvenArgs };
