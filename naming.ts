// @ts-nocheck

// 2. Evitar desinformação

// Abreviaturas

// bad
const hp = Math.sqrt(a * a + b * b); // O que é "hp"? Pode confundir com "hipotenusa" ou "Hewlett-Packard".
const hypotenuse = Math.sqrt(a * a + b * b); // Nome claro que descreve o propósito da variável.

// Expressões conhecidas em contextos desapropriados
const accountsList: string[] = ["Alice", "Bob", "Charlie"]; // O sufixo "List" é redundante.
const accounts: string[] = ["Alice", "Bob", "Charlie"]; // Nome direto e relacionado ao conteúdo.
const users: string[] = ["Alice", "Bob", "Charlie"]; // Pode ser ainda mais descritivo do propósito.

// Pequenas Variações nas Palavras

// bad

class XYZControllerForEfficientHandlingOfStrings {
  handle(strings: string[]): void {
    // Manipula strings
  }
}

class XYZControllerForEfficientStorageOfStrings {
  store(strings: string[]): void {
    // Armazena strings
  }
}

// better

class StringHandler {
  handle(strings: string[]): void {
    // Manipula strings
  }
}

class StringStorage {
  store(strings: string[]): void {
    // Armazena strings
  }
}

// 3. Distinguir com significado

// bad
function copyChars(a1: string[], a2: string[]): void {
  for (let i = 0; i < a1.length; i++) {
    a2[i] = a1[i];
  }
}

// good
function copyChars(source: string[], destination: string[]): void {
  for (let i = 0; i < source.length; i++) {
    destination[i] = source[i];
  }
}

// bad
const nameString: string = "John";
const productInfo: { id: number; name: string } = { id: 1, name: "Laptop" };

// good
const name: string = "John";
const product: { id: number; name: string } = { id: 1, name: "Laptop" };

// 4. Garantir a Pronúncia

// bad
class DtaRcrd102 {
  private genymdhms: Date; // Nome confuso e não pronunciável
  private modymdhms: Date; // Nome confuso e não pronunciável
  private pszqint: string = "102"; // Sem clareza do propósito
}

// good
class CustomerRecord {
  private generationTimestamp: Date; // Nome descritivo e fácil de entender
  private modificationTimestamp: Date; // Nome descritivo e fácil de entender
  private recordId: string = "102"; // Nome claro sobre o propósito
}

// 6. Evitar codificações (2/2)

interface IProduct {
  id: number;
  name: string;
}

class Product implements IProduct {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

// 7. Evitar Mapeamentos

// bad
for (let i = 0; i < tasks.length; i++) {
  const x = tasks[i].duration * 2; // O que é "x"? Nome sem significado
  console.log(x);
}

for (let taskIndex = 0; taskIndex < tasks.length; taskIndex++) {
  const doubledDuration = tasks[taskIndex].duration * 2; // Nome claro e descritivo
  console.log(doubledDuration);
}

// execeptions

for (let i = 0; i < array.length; i++) {
  console.log(array[i]); // i é aceitável em loops
}

const calculateDistance = (x: number, y: number): number => {
  return Math.sqrt(x * x + y * y); // x e y fazem sentido no contexto matemático
};

// 8. Nomes de Classes & 9. Nomes de Métodos 

// bad
class OrderProcessor {
  process(order: Order): void {
    // O nome "process" é ambíguo
  }
}

// good
class OrderProcessor {
  calculateTotal(order: Order): number {
    // Nome explica claramente que o método calcula o total de um pedido
  }

  validateOrder(order: Order): boolean {
    // Nome explica que o método valida o pedido
  }
}

// 10. Atribuir Contexto com Significado (1/2)

// bad
const name: string = "Alice";
const age: number = 30;
const salary: number = 5000;

// good
const employeeName: string = "Alice";
const employeeAge: number = 30;
const employeeSalary: number = 5000;

// good

class CustomerAccount {
  // Lógica relacionada à conta de um cliente
}

class EmployeeAccount {
  // Lógica relacionada à conta de um funcionário
}

class Employee {
  calculateSalary(): number {
    // Calcula o salário do funcionário
    return 0;
  }

  updateDetails(name: string, age: number): void {
    // Atualiza a info do funcionário
  }
}

// 10. Atribuir Contexto com Significado (2/2)

// bad
function printGuessStatistics(candidate: string, count: number): void {
  let number: string;
  let verb: string;
  let pluralModifier: string;

  if (count === 0) {
    number = "no";
    verb = "are";
    pluralModifier = "s";
  } else if (count === 1) {
    number = "1";
    verb = "is";
    pluralModifier = "";
  } else {
    number = count.toString();
    verb = "are";
    pluralModifier = "s";
  }

  const guessMessage = `There ${verb} ${number} ${candidate}${pluralModifier}`;
  console.log(guessMessage);
}

// good

class GuessStatisticsMessage {
  private number: string = "";
  private verb: string = "";
  private pluralModifier: string = "";

  public make(candidate: string, count: number): string {
    this.createPluralDependentMessageParts(count);
    return `There ${this.verb} ${this.number} ${candidate}${this.pluralModifier}`;
  }

  private createPluralDependentMessageParts(count: number): void {
    if (count === 0) {
      this.thereAreNoLetters();
    } else if (count === 1) {
      this.thereIsOneLetter();
    } else {
      this.thereAreManyLetters(count);
    }
  }

  private thereAreNoLetters(): void {
    this.number = "no";
    this.verb = "are";
    this.pluralModifier = "s";
  }

  private thereIsOneLetter(): void {
    this.number = "1";
    this.verb = "is";
    this.pluralModifier = "";
  }

  private thereAreManyLetters(count: number): void {
    this.number = count.toString();
    this.verb = "are";
    this.pluralModifier = "s";
  }
}



