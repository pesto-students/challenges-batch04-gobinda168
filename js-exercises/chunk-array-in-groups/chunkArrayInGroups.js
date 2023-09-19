function chunkArrayInGroups(array, chunkSize) {
  const newArray = [];
  const noOfSubArray = Math.ceil(array.length / chunkSize);
  for (let i = 0; i < noOfSubArray; i += 1) {
    newArray.push(array.slice(i * chunkSize, i * chunkSize + chunkSize));
  }
  return newArray;
}

export { chunkArrayInGroups };
