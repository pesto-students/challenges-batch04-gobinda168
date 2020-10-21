function sumFibs(num) {
  const fib = (n, cache = [1, 1]) => {
    const len = cache.length;
    if (cache[len - 1] > n) {
      return cache
        .filter((val) => val % 2 === 1 && val <= num)
        .reduce((a, b) => a + b, 0);
    }
    cache.push(cache[len - 1] + cache[len - 2]);
    return fib(n, cache);
  };
  return fib(num);
}

function cacheFunction(fn) {
  const cache = {};
  return (n) => {
    if (n in cache) return cache[n];
    const res = fn(n);
    cache[n] = res;
    return res;
  };
}

export { sumFibs, cacheFunction };
