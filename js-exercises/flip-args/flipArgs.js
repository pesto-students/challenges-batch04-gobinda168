/* eslint-disable quotes */
function flipArgs() {
  return (...args) => [...args].reverse();
}
const flipped = flipArgs();

export { flipped };
