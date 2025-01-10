class WordSearch {
  /**
   * Checks if the input string starts with the given input word.
   * @param inputString - The input string to check.
   * @param inputWord - The word to check against the first word of the string.
   * @returns `true` if the first word matches, otherwise `false`.
   */
  public static firstWordMatchesInput(inputString: string, inputWord: string): boolean {
    const stringArray = inputString.split(" ");
    const firstWord = stringArray[0];
    return firstWord.toUpperCase() === inputWord.toUpperCase();
  }

  /**
   * Counts the number of times the input word appears in the input string.
   * @param inputString - The input string to search in.
   * @param inputWord - The word to count occurrences of.
   * @returns The number of times the word appears in the string.
   */
  public static countWordMatches(inputString: string, inputWord: string): number {
    const stringArray = inputString.split(" ");
    const wordToMatch = inputWord.toUpperCase();
    let countMatches = 0;

    for (const word of stringArray) {
      if (word.toUpperCase() === wordToMatch) {
        countMatches++;
      }
    }
    return countMatches;
  }
}

// usage
console.log(WordSearch.firstWordMatchesInput("hello world", "HEllo"));
console.log(WordSearch.firstWordMatchesInput("hello world", "yellow"));
console.log(WordSearch.countWordMatches("hello world, hello life", "hello"));