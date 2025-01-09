// @ts-nocheck

// Propósito da formatação

// bad formatting
function processInput(input: string) { if (input) { const parsed = JSON.parse(input); const result = parsed.value * 2; return result; } else { return 0; } }

// good formatting
function processInput(input: string): number {
  if (!input) {
    return 0;
  }

  const parsed = JSON.parse(input);
  const result = parsed.value * 2;

  return result;
}

// 1. Estrutura vertical (1/4)

// poor vertical structure
class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  private logCalculation(operation: string, result: number): void {
    console.log(`Performed ${operation}, result: ${result}`);
  }

  subtract(a: number, b: number): number {
    return a - b;
  }
}

// good vertical structure
class Calculator {
  add(a: number, b: number): number {
    const result = a + b;
    this.logCalculation('addition', result);
    return result;
  }

  subtract(a: number, b: number): number {
    const result = a - b;
    this.logCalculation('subtraction', result);
    return result;
  }

  // Private helper methods
  private logCalculation(operation: string, result: number): void {
    console.log(`Performed ${operation}, result: ${result}`);
  }
}

