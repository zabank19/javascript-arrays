import fs from "fs/promises";

describe("Array", () => {
  test("Exercise 2 : Variables จะต้องมีค่าที่ถูกต้อง ", async () => {
    const data = await fs.readFile("./ex-2.js");
    const code = `${data} \n return { alex ,alexHobbies, alexAndJamesAge, updateEmployees, employees}`;

    const func = new Function(code);
    const { alex, alexHobbies, alexAndJamesAge, updateEmployees, employees } =
      func();

    expect(alex).toEqual("Alex");
    expect(alexHobbies).toEqual([
      "Cryptocurrency",
      "Social media",
      "Watching basketball",
    ]);
    expect(alexAndJamesAge).toEqual(65);
    expect(updateEmployees).toEqual([
      { name: "James", age: 40, hobbies: ["Football", "Social media"] },
      {
        name: "Alex",
        age: 25,
        hobbies: ["Cryptocurrency", "Social media", "Watching basketball"],
      },
      { name: "Alicia", age: 29, hobbies: ["Shopping", "Reading novels"] },
    ]);

    expect(employees).toEqual([
      { name: "James", age: 40, hobbies: ["Football", "Social media"] },
      {
        name: "Alex",
        age: 25,
        hobbies: ["Cryptocurrency", "Social media", "Watching basketball"],
      },
      { name: "Alicia", age: 29, hobbies: ["Shopping", "Reading novels"] },
    ]);
  });
});
