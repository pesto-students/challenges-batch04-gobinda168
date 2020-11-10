const allSettled = (promises) => {
  if (!promises) return Promise.resolve([]);
  const results = [];
  let counter = 0;
  return new Promise((resolve) => {
    promises.forEach((promise, index) => Promise.resolve(promise)
      .then((result) => {
        counter += 1;
        results[index] = { status: 'fulfilled', value: result };
        if (counter === promises.length) {
          resolve(results);
        }
      })
      .catch((err) => {
        counter += 1;
        results[index] = { status: 'rejected', reason: err };
        if (counter === promises.length) {
          resolve(results);
        }
      }));
  });
};

export { allSettled };
