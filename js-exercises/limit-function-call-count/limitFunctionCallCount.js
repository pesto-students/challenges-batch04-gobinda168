function limitFunctionCallCount(fn, n) {
  let counter = n;
  return (...args) => {
    counter -= 1;
    if (counter < 1) return null;
    return fn(...args);
  };
}

export { limitFunctionCallCount };
