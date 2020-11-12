function throttle(fn, timeInMs) {
  let timeoutHandler = null;
  return () => {
    if (timeoutHandler === null) {
      timeoutHandler = setTimeout(() => {
        fn();
        clearInterval(timeoutHandler);
        timeoutHandler = null;
      }, timeInMs);
    }
  };
}

export { throttle };
