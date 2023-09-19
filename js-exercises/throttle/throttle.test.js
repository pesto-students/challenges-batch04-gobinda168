import { throttle } from "./throttle";

jest.useFakeTimers();
describe("throttle", () => {
  test("The function should return a Function", () => {
    expect(typeof throttle(() => {}, 1000)).toEqual("function");
  });
  test("Should throttle function calls as per given delay", () => {
    const func = jest.fn();
    const throttleFn = throttle(func, 5000);
    throttleFn();
    throttleFn();
    throttleFn();
    jest.advanceTimersByTime(5000);

    expect(func).toHaveBeenCalledTimes(1);
  });
});
