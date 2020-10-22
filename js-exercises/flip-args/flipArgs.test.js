/* eslint-disable quotes */
import { flipped } from "./flipArgs";

describe("flipsArgs", () => {
  it("Should return a function", () => {
    expect(typeof flipped()).toBe("object");
  });
  it("Arguments must be in reverse order", () => {
   expect(flipped("a", "b")).toEqual(["b", "a"]);
 });
});
