import fs from "fs/promises";

describe("Array", () => {
  test("Exercise 1 : Variables จะต้อง access index ที่ถูกต้อง' ", async () => {
    const data = await fs.readFile("./ex-1.js");
    const code = `${data} return {blueColor,fourthColor,fifthColor,tenthColor}`;
    const colors = ["red", "green", "blue", "khaki", "orange"];

    const func = new Function(code);
    const { blueColor, fourthColor, fifthColor, tenthColor } = func();

    expect(blueColor).toEqual(colors[2]);
    expect(fourthColor).toEqual(colors[3]);
    expect(fifthColor).toEqual(colors[4]);
    expect(tenthColor).toEqual(colors[9]);
  });
});
