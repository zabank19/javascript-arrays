import fs from "fs/promises";

describe("Array", () => {
  test("Exercise: Variables จะต้องมีค่าที่ถูกต้อง ", async () => {
    const data = await fs.readFile("./ex-2.js");
    const code = `${data} \n return { alex ,alexHobbies, alexAndJamesAge }`;

    const func = new Function(code);
    const { alex, alexHobbies, alexAndJamesAge } = func();

    expect(alex).toEqual("Alex");
    expect(alexHobbies).toEqual(["Cryptocurrency", "Social media"]);
    expect(alexAndJamesAge).toEqual(65);
  });
});
