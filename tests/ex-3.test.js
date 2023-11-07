import fs from "fs/promises";

describe("Array", () => {
  test("Exercise: employees[0].hobbies จะต้องมีค่าที่ถูกต้อง ", async () => {
    const data = await fs.readFile("./ex-3.js");
    const code = `${data} \n return { employees }`;

    const func = new Function(code);
    const { employees } = func();

    expect(employees[1].hobbies).toEqual([
      "Cryptocurrency",
      "Social media",
      "Watching basketball",
    ]);
  });
});
