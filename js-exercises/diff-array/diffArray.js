function diffArray(array1, array2) {
  const arrayContainingDiff = [];

  // checking whether array1 have any element different from array2
  array1.forEach((value) => {
    if (!array2.includes(value)) arrayContainingDiff.push(value);
  });

  // checking whether array2 have any element different from array1
  array2.forEach((value) => {
    if (!array1.includes(value)) arrayContainingDiff.push(value);
  });

  return arrayContainingDiff;
}

export { diffArray };
