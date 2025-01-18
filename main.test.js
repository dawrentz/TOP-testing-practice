import * as mod from "./main.js";

// ================================ init ================================ //

test("works", () => {
  expect(mod.testFunc()).toBe(777);
});

// ================================ capitalize ================================ //

test("capitalize the first char", () => {
  expect(mod.capitalize("YELLOW")).toBe("Yellow");
});

test("capitalize the first char", () => {
  expect(mod.capitalize("blue")).toBe("Blue");
});

test("capitalize nothing", () => {
  expect(mod.capitalize()).toBe("");
});

test("capitalize not string", () => {
  expect(mod.capitalize(123)).toBe("Error: need input string");
});

// ================================ reverseString ================================ //

test("reverse string", () => {
  expect(mod.reverseString("dog")).toBe("god");
});

test("reverse string", () => {
  expect(mod.reverseString("1234")).toBe("4321");
});

test("reverse nothing", () => {
  expect(mod.reverseString()).toBe("");
});

test("reverse not string", () => {
  expect(mod.reverseString(123)).toBe("Error: need input string");
});

test("reverse not string", () => {
  expect(mod.reverseString(123)).toBe("Error: need input string");
});

// ================================ calculator ================================ //

test("calc add", () => {
  expect(mod.calculator.add(1, 2)).toBe(3);
});

test("calc add", () => {
  expect(mod.calculator.add(-1, -3)).toBe(-4);
});

test("calc subtract", () => {
  expect(mod.calculator.subtract(1, 2)).toBe(-1);
});

test("calc subtract", () => {
  expect(mod.calculator.subtract(-1, -3)).toBe(2);
});

test("calc divide", () => {
  expect(mod.calculator.divide(10, 2)).toBe(5);
});

test("calc divide", () => {
  expect(mod.calculator.divide(-20, 5)).toBe(-4);
});

test("calc divide zero", () => {
  expect(mod.calculator.divide(1, 0)).toBe(undefined);
});

test("calc multiply", () => {
  expect(mod.calculator.multiply(10, 2)).toBe(20);
});

test("calc multiply", () => {
  expect(mod.calculator.multiply(-20, 5)).toBe(-100);
});

// ================================ caesarCipher ================================ //

test("caesarCipher", () => {
  expect(mod.caesarCipher("joshua", 1)).toBe("kptivb");
});

test("caesarCipher", () => {
  expect(mod.caesarCipher("purple", 2)).toBe("rwtrng");
});

test("caesarCipher loop back", () => {
  expect(mod.caesarCipher("xyz", 3)).toBe("abc");
});

test("caesarCipher preseve case", () => {
  expect(mod.caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("caesarCipher punctuation", () => {
  expect(mod.caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("caesarCipher no key", () => {
  expect(mod.caesarCipher("purple", 0)).toBe("purple");
});

test("caesarCipher nothing", () => {
  expect(mod.caesarCipher("", 1)).toBe("");
});

test("caesarCipher not string", () => {
  expect(mod.caesarCipher(123, 1)).toBe("Error: need input string");
});

test("caesarCipher not number (key)", () => {
  expect(mod.caesarCipher("joshua", "one")).toBe("Error: key must be number");
});

// ================================ analyzeArray ================================ //

test("analyzeArray average", () => {
  expect(mod.analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test("analyzeArray min", () => {
  expect(mod.analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test("analyzeArray max", () => {
  expect(mod.analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test("analyzeArray length", () => {
  expect(mod.analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});
