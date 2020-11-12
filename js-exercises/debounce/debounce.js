function debounce(fn, timeInMs) {
  setTimeout(() => {
    fn();
  }, timeInMs);
}

export { debounce };
