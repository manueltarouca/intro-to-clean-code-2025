// @ts-nocheck

// Importância das Funções

// bad

console.log("User logged in: Alice");
console.log("User logged in: Bob");
console.log("User logged in: Charlie");

// good

function logUserLogin(userName: string): void {
  console.log(`User logged in: ${userName}`);
}

logUserLogin("Alice");
logUserLogin("Bob");
logUserLogin("Charlie");

// bad
function process(data: any): void {
  // O que essa função faz exatamente?
}

// good
function validateUserInput(input: string): boolean {
  // Valida o input do utilizador
  return input.length > 0;
}

// bad
if (userRole === "admin" || userRole === "superadmin") {
  // Lógica duplicada aqui
}

// good

function isAdmin(userRole: string): boolean {
  return userRole === "admin" || userRole === "superadmin";
}

if (isAdmin(userRole)) {
  // Código mais limpo e fácil de alterar
}

// Exercício

// before

import * as fs from "fs";

function processFile(inputFilePath: string, outputFilePath: string): void {
  const data = fs.readFileSync(inputFilePath, "utf-8");
  const lines = data.split("\n");
  let processedContent = "";

  for (const line of lines) {
    if (line.trim() !== "") {
      const processedLine = line.toUpperCase() + "!";
      processedContent += processedLine + "\n";
    }
  }

  fs.writeFileSync(outputFilePath, processedContent);
  console.log("File processed successfully!");
}

// after

import * as fs from "fs";

function readFile(filePath: string): string {
  return fs.readFileSync(filePath, "utf-8");
}

function processLines(lines: string[]): string[] {
  return lines
    .filter(line => line.trim() !== "") // Ignore empty lines
    .map(line => line.toUpperCase() + "!"); // Convert to uppercase and add "!"
}

function processLinesToLowerCase(lines: string[]): string[] {
  return lines
    .filter(line => line.trim() !== "") // Ignore empty lines
    .map(line => line.toLocaleLowerCase() + "!"); // Convert to uppercase and add "!"
}

function writeFile(filePath: string, content: string): void {
  fs.writeFileSync(filePath, content);
}

function processFile(inputFilePath: string, outputFilePath: string, processPredicate: Function): void {
  const data = readFile(inputFilePath);
  const lines = data.split("\n");
  const processedLines = processPredicate(lines);
  const processedContent = processedLines.join("\n");
  writeFile(outputFilePath, processedContent);
  console.log("File processed successfully!");
}

processFile("input.txt", "output.txt", processLinesToLowerCase);

// 1. Funções pequenas

// before
import * as fs from "fs";

function processCSVFile(filePath: string): void {
  const data = fs.readFileSync(filePath, "utf-8");
  const rows = data.split("\n");

  let totalAmount = 0;
  let totalTransactions = 0;

  for (const row of rows) {
    if (row.trim() !== "") {
      const [id, amount] = row.split(",");
      totalAmount += parseFloat(amount);
      totalTransactions++;
    }
  }

  console.log(`Total Amount: ${totalAmount}`);
  console.log(`Total Transactions: ${totalTransactions}`);
}

// after

import * as fs from "fs";

function readCSVFile(filePath: string): string[] {
  const data = fs.readFileSync(filePath, "utf-8");
  return data.split("\n");
}

function parseCSVRow(row: string): { id: string; amount: number } | null {
  if (row.trim() === "") {
    return null;
  }
  const [id, amount] = row.split(",");
  return { id, amount: parseFloat(amount) };
}

function calculateTotals(rows: string[]): { totalAmount: number; totalTransactions: number } {
  let totalAmount = 0;
  let totalTransactions = 0;

  for (const row of rows) {
    const parsedRow = parseCSVRow(row);
    if (parsedRow) {
      totalAmount += parsedRow.amount;
      totalTransactions++;
    }
  }

  return { totalAmount, totalTransactions };
}

function processCSVFile(filePath: string): void {
  const rows = readCSVFile(filePath);
  const { totalAmount, totalTransactions } = calculateTotals(rows);

  console.log(`Total Amount: ${totalAmount}`);
  console.log(`Total Transactions: ${totalTransactions}`);
}


// 3. Um nível de abstração & 4. Leitura top-down

const title = "Welcome!";
const content = "This is a <b>simple</b> web page.";
console.log(generateWebPage(title, content));

// High-Level Function
function generateWebPage(title: string, bodyContent: string): string {
  const header = createHeader(title);
  const body = createBody(bodyContent);
  const footer = createFooter();
  return assemblePage(header, body, footer);
}

// Intermediate-Level Functions
function createHeader(title: string): string {
  return `<header>\n<h1>${escapeHtml(title)}</h1>\n</header>`;
}

function createBody(content: string): string {
  const sanitizedContent = sanitizeContent(content);
  return `<main>\n<p>${sanitizedContent}</p>\n</main>`;
}

function createFooter(): string {
  return `<footer>\n<p>Generated on ${new Date().toISOString()}</p>\n</footer>`;
}

function assemblePage(header: string, body: string, footer: string): string {
  return `<!DOCTYPE html>\n<html>\n${header}\n${body}\n${footer}\n</html>`;
}

// Low-Level Functions
function escapeHtml(text: string): string {
  return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function sanitizeContent(content: string): string {
  return escapeHtml(content.trim());
}

// usage
const title = "Welcome!";
const content = "This is a <b>simple</b> web page.";
console.log(generateWebPage(title, content));

// 6. Nome descritivo

// lack of meaning

function calc(a: number, b: number): number {
  return a * b * 0.1;
}

const x = calc(500, 12);
console.log(x); // What does this mean?

// meaningful

function calculateCommission(salesAmount: number, commissionRate: number): number {
  return salesAmount * commissionRate * 0.1;
}

const monthlyCommission = calculateCommission(500, 12);
console.log(`Monthly Commission: ${monthlyCommission}`);

// 7. Poucos argumentos
// 7.1. Single Argument (Monadic)
function square(number: number): number {
  return number * number;
}

console.log(square(4));

// 7.2. Flags as Arguments (Avoid When Possible)
function formatText(text: string, uppercase: boolean): string {
  return uppercase ? text.toUpperCase() : text.toLowerCase();
}

console.log(formatText("Hello World", true));
console.log(formatText("Hello World", false));

// better
function formatTextToUppercase(text: string): string {
  return text.toUpperCase();
}

function formatTextToLowercase(text: string): string {
  return text.toLowerCase();
}

// 7.3. Two Arguments (Dyadic)
function calculateRectangleArea(width: number, height: number): number {
  return width * height;
}

console.log(calculateRectangleArea(5, 10));

// 7.4. Three Arguments (Triadic)
function createDate(day: number, month: number, year: number): string {
  return `${day}/${month}/${year}`;
}

console.log(createDate(14, 9, 2023));

// 7.5. Use Objects to Group Arguments

type Rectangle = {
  width: number;
  height: number;
};

function calculateRectangleArea(rectangle: Rectangle): number {
  return rectangle.width * rectangle.height;
}

const myRectangle = { width: 5, height: 10 };
console.log(calculateRectangleArea(myRectangle));


// 7.6. Arguments as Lists
function calculateSum(numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(calculateSum([1, 2, 3, 4]));

// 11. Programação estruturada

// unstructured

function findFirstNegative(numbers: number[]): number | null {
  for (const num of numbers) {
    if (num < 0) {
      console.log("Negative number found:", num);
      return num; // Early return (multiple exit points)
    }
  }
  console.log("No negative numbers found");
  return null; // Another exit point
}

console.log(findFirstNegative([1, 2, -3, 4]));
console.log(findFirstNegative([1, 2, 3, 4]));

// structured

function findFirstNegative(numbers: number[]): { found: boolean; value: number | null } {
  let negativeNumber: number | null = null;

  for (const num of numbers) {
    if (num < 0) {
      negativeNumber = num;
      break; // Controlled exit from the loop, not the function
    }
  }

  return {
    found: negativeNumber !== null,
    value: negativeNumber,
  };
}

function logResult(result: { found: boolean; value: number | null }): void {
  if (result.found) {
    console.log("Negative number found:", result.value);
  } else {
    console.log("No negative numbers found");
  }
}

const result1 = findFirstNegative([1, 2, -3, 4]);
logResult(result1);
const result2 = findFirstNegative([1, 2, 3, 4]);
logResult(result2);

