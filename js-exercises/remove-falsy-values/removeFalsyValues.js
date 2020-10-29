function removeFalsyValues(array) {
  const arrayWithoutFalsy = array.filter((value) => value);
  return arrayWithoutFalsy;
}

export { removeFalsyValues };
