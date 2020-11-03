function dropElements(elements, predicate) {
  const filteredArray = [];
  elements.forEach((element) => {
    if (predicate(element)) {
      filteredArray.push(element);
    }
  });
  return filteredArray;
}

export { dropElements };
