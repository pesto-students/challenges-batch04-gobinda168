/* eslint-disable max-len */
const allPromises = (promises) => {
  if (!promises) return Promise.resolve([]);
  return promises.reduce(
    (accumulatedPromises, promise) => accumulatedPromises.then((results) => Promise.resolve(promise).then((currentPromise) => [
      ...results,
      currentPromise,
    ])),
    Promise.resolve([]),
  );
};

export { allPromises };
