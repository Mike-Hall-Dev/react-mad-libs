const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
  test("", () => {
    const res = addCommas(1234);
    expect(res).toEqual("1,234")
  })
  test("", () => {
    const res = addCommas(1000000);
    expect(res).toEqual("1,000,000")
  })
  test("", () => {
    const res = addCommas(9876543210);
    expect(res).toEqual("9,876,543,210")
  })
  test("", () => {
    const res = addCommas(6);
    expect(res).toEqual("6")
  })
  test("", () => {
    const res = addCommas(-10);
    expect(res).toEqual("-10")
  })
  test("", () => {
    const res = addCommas(-5678);
    expect(res).toEqual("-5,678")
  })
  test("", () => {
    const res = addCommas(12345.678);
    expect(res).toEqual("12,345.678")
  })
  test("", () => {
    const res = addCommas(-3141592.65);
    expect(res).toEqual("-3,141,592.65")
  })
});
