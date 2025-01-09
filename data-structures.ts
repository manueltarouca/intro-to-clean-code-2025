// @ts-nocheck

// Objetos utilizados como objetos

// 1. Objects as Objects

class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  public getBalance(): number {
    return this.balance;
  }

  public deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Deposit amount must be greater than zero");
    }
    this.balance += amount;
  }

  public withdraw(amount: number): void {
    if (amount > this.balance) {
      throw new Error("Insufficient balance");
    }
    this.balance -= amount;
  }
}

// usage
const account = new BankAccount(100);
account.deposit(50);
console.log(account.getBalance());
account.withdraw(30);
console.log(account.getBalance());

// 2. Objects as Data Structures

type UserRecord = {
  id: number;
  name: string;
  email: string;
  age: number;
};

class UserData {
  public records: UserRecord[] = [];

  public save(record: UserRecord): void {
    this.records.push(record);
  }

  public findById(id: number): UserRecord | undefined {
    return this.records.find((record) => record.id === id);
  }
}

// usage
const userData = new UserData();
userData.save({ id: 1, name: "José António", email: "jose.antonio@example.com", age: 69 });
const user = userData.findById(1);
console.log(user?.name);


// problematic (exposing internal state, direct variable access)
class Point {
  public x: number;
  public y: number;

  public setX(x: number): void {
    this.x = x;
  }

  public setY(y: number): void {
    this.y = y;
  }
}

// improved (abstraction and encapsulation)
class Point {
  private x: number;
  private y: number;

  public setCartesian(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }

  public getCoordinates(): { x: number; y: number } {
    return { x: this.x, y: this.y };
  }
}

// Exemplo de utilização: estrutura de dados

class Point {
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

class Rectangle {
  public topLeft: Point;
  public height: number;
  public width: number;

  constructor(topLeft: Point, height: number, width: number) {
    this.topLeft = topLeft;
    this.height = height;
    this.width = width;
  }
}

class Circle {
  public center: Point;
  public radius: number;

  constructor(center: Point, radius: number) {
    this.center = center;
    this.radius = radius;
  }
}

class Geometry {
  public static readonly PI: number = 3.141592653589793;

  public area(shape: any): number {
    if (shape instanceof Rectangle) {
      return shape.height * shape.width;
    } else if (shape instanceof Circle) {
      return Geometry.PI * shape.radius * shape.radius;
    } else {
      throw new Error("NoSuchShapeException");
    }
  }
}

// usage
const rect = new Rectangle(new Point(0, 0), 10, 20);
const circle = new Circle(new Point(5, 5), 10);

const geometry = new Geometry();
console.log("Rectangle Area:", geometry.area(rect));
console.log("Circle Area:", geometry.area(circle));

// Exemplo de utilização: objetos

interface Shape {
  area(): number;
}

class Point {
  private x: number;
  private y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

class Rectangle implements Shape {
  private topLeft: Point;
  private height: number;
  private width: number;

  constructor(topLeft: Point, height: number, width: number) {
    this.topLeft = topLeft;
    this.height = height;
    this.width = width;
  }

  public area(): number {
    return this.height * this.width;
  }
}

class Circle implements Shape {
  private center: Point;
  private radius: number;
  private static readonly PI: number = 3.141592653589793;

  constructor(center: Point, radius: number) {
    this.center = center;
    this.radius = radius;
  }

  public area(): number {
    return Circle.PI * this.radius * this.radius;
  }
}

// usage
const rectangle = new Rectangle(new Point(0, 0), 10, 20);
const circle = new Circle(new Point(5, 5), 10);
console.log("Rectangle Area:", rectangle.area());
console.log("Circle Area:", circle.area());

// Outras implicações: Lei de Demeter

// breaking a leg

class Leg {
  public move(): void {
    console.log("Leg is moving...");
  }
}

class Dog {
  public legs: Leg[];

  constructor() {
    this.legs = [new Leg(), new Leg(), new Leg(), new Leg()];
  }
}

class Owner {
  private dog: Dog;

  constructor(dog: Dog) {
    this.dog = dog;
  }

  public walkDog(): void {
    // Violates the Law of Demeter: Accessing the dog's legs directly
    this.dog.legs.forEach((leg) => leg.move());
  }
}

// passing the law

class Leg {
  public move(): void {
    console.log("Leg is moving...");
  }
}

class Dog {
  private legs: Leg[];

  constructor() {
    this.legs = [new Leg(), new Leg(), new Leg(), new Leg()];
  }

  public walk(): void {
    this.legs.forEach((leg) => leg.move());
  }
}

class Owner {
  private dog: Dog;

  constructor(dog: Dog) {
    this.dog = dog;
  }

  public walkDog(): void {
    // Follows the Law of Demeter: Interacts with the dog only
    this.dog.walk();
  }
}

// Another example passing the law
class Wallet {
  private totalMoney: number;

  constructor(totalMoney: number) {
    this.totalMoney = totalMoney;
  }

  public getTotalMoney(): number {
    return this.totalMoney;
  }
}

class Customer {
  private wallet: Wallet;

  constructor(wallet: Wallet) {
    this.wallet = wallet;
  }

  public getPayment(): number {
    return this.wallet.getTotalMoney();
  }
}

// usage
const wallet = new Wallet(100);
const customer = new Customer(wallet);
const payment = customer.getPayment();
console.log(`Payment amount: $${payment}`);
