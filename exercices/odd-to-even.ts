class OddToEven {
  public static toEven(oddString: string): void {
    let maxValue = parseInt(oddString);

    for (let i = oddString.length - 1; i >= 0; --i) {
      const value = parseInt(oddString.charAt(i));

      if (value % 2 === 0) {
        const evaluationValue = parseInt(OddToEven.swap(i, oddString.length - 1, oddString));
        maxValue = Math.max(evaluationValue, maxValue);
      }
    }

    console.log(maxValue);
  }

  private static swap(firstIndex: number, secondIndex: number, toSwap: string): string {
    const characterArray = toSwap.split("");
    const temp = characterArray[firstIndex];

    characterArray[firstIndex] = characterArray[secondIndex];
    characterArray[secondIndex] = temp;

    return characterArray.join("");
  }
}

// usage
OddToEven.toEven("1235785");
OddToEven.toEven("789");
OddToEven.toEven("536425");
OddToEven.toEven("1356425");
OddToEven.toEven("13579");