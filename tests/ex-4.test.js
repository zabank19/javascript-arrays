import fs from "fs/promises";
import { jest } from "@jest/globals";

describe("Array", () => {
  beforeAll(() => {
    jest.spyOn(console, "log");
  });
  afterAll(() => {
    jest.resetAllMocks();
  });

  test("Exercise 4 : student จะต้องมี key-value pair ที่ถูกต้อง ", async () => {
    const data = await fs.readFile("./ex-4.js");
    const code = `${data}\nreturn student`;

    const func = new Function(code);

    const student = func();

    expect(student.name).toEqual("John Doe");
    expect(student.age).toEqual(18);
    expect(student.grade).toEqual(12);
    expect(student.subjects).toEqual(["Math", "Science", "History"]);
  });

  test("Exercise 4 : ผลลัพธ์การ console.log จะต้องมีค่าที่ถูกต้อง' ", async () => {
    const data = await fs.readFile("./ex-4.js");
    const code = `${data}\n return student`;

    const func = new Function(code);
    const student = func();

    const expectedLog = [
      ["Student Name: John Doe"],
      ["Student Age: 18"],
      ["Student Grade: 12"],
      ["Student Subjects: Math,Science,History"],
    ];

    expect(console.log.mock.calls).toEqual(expect.arrayContaining(expectedLog));
  });
});
