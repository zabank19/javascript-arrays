import fs from "fs/promises";
import { jest } from "@jest/globals";

describe("Array", () => {
  beforeAll(() => {
    jest.spyOn(console, "log");
  });
  afterAll(() => {
    jest.resetAllMocks();
  });

  test("Exercise : isArray จะต้องมีค่าที่ถูกต้อง' ", async () => {
    const data = await fs.readFile("./ex-7.js");
    const code = `${data}\n return isArray`;

    const func = new Function(code);
    const isArray = func();

    expect(isArray).toEqual(true);
  });

  test("Exercise : creditCardTypeOfBlindermann จะต้องเป็นค่าที่ถูกต้อง ", async () => {
    const data = await fs.readFile("./ex-7.js");
    const code = `${data} \n return {creditCardTypeOfBlindermann, orders}`;

    const func = new Function(code);
    const { creditCardTypeOfBlindermann, orders } = func();

    expect(creditCardTypeOfBlindermann).toEqual("switch");
  });

  test("Exercise : creditCardType ของ orders[2] จะต้องเป็นค่าที่ถูกต้อง ", async () => {
    const data = await fs.readFile("./ex-7.js");
    const code = `${data} \n {return orders}`;

    const func = new Function(code);
    const orders = func();

    expect(orders[1].creditCardType).toEqual("visa");
  });

  test("Exercise : totalPurchaseOfJoannet จะต้องเป็นค่าที่ถูกต้อง ", async () => {
    const data = await fs.readFile("./ex-7.js");
    const code = `${data} return {totalPurchaseOfJoannet, orders}`;

    const func = new Function(code);
    const { totalPurchaseOfJoannet } = func();

    expect(totalPurchaseOfJoannet).toStrictEqual(96);
  });

  test("Exercise : totalPurchaseOfDary จะต้องเป็นค่าที่ถูกต้อง ", async () => {
    const data = await fs.readFile("./ex-7.js");
    const code = `${data} return totalPurchaseOfDary`;

    const func = new Function(code);
    const totalPurchaseOfDary = func();

    expect(totalPurchaseOfDary).toStrictEqual(934902);
  });

  test("Exercise : orders จะต้องเป็นค่าที่ถูกต้อง ", async () => {
    const data = await fs.readFile("./ex-7.js");
    const code = `${data} return orders`;

    const func = new Function(code);
    const orders = func();

    expect(orders).toEqual([
      {
        id: 2,
        customerName: "Celia Dary",
        productName: "Bread - Pumpernickle, Rounds",
        productPrice: 10746,
        productQuantity: 87,
        creditCardType: "jcb",
      },
      {
        id: 3,
        customerName: "Toinette Blindermann",
        productName: "Bar - Granola Trail Mix Fruit Nut",
        productPrice: 94191,
        productQuantity: 31,
        creditCardType: "visa",
      },
      {
        id: 4,
        customerName: "Anjela Joannet",
        productName: "Cheese - Parmesan Cubes",
        productPrice: 5131,
        productQuantity: 96,
        creditCardType: "diners-club-carte-blanche",
      },
      {
        id: 5,
        customerName: "Kennith Bussons",
        productName: "Wine - White, Pinot Grigio",
        productPrice: 94432,
        productQuantity: 75,
        creditCardType: "jcb",
      },
    ]);
  });
});
