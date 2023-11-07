import fs from "fs/promises";

describe("Array", () => {
  test("Exercise: ข้อมูลของ Kody ใน employees จะต้องถูกลบออกไป", async () => {
    const data = await fs.readFile("./ex-5.js");
    const code = `${data} \n return { employees }`;

    const func = new Function(code);
    const { employees } = func();

    expect(employees).toEqual([
      { name: "James", age: 40, hobbies: ["Football", "Social media"] },
      {
        name: "Alex",
        age: 25,
        hobbies: ["Cryptocurrency", "Social media"],
      },
      { name: "Alicia", age: 29, hobbies: ["Shopping", "Reading novels"] },
    ]);

    expect(employees.length).toEqual(3);
  });
});
