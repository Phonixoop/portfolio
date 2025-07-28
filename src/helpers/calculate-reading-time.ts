export function countWordsDeep(input: any): number {
  let wordCount = 0;

  function countWords(value: any) {
    if (typeof value === "string") {
      // Count words by splitting on whitespace
      wordCount += value.trim().split(/\s+/).filter(Boolean).length;
    } else if (Array.isArray(value)) {
      value.forEach((item) => countWords(item));
    } else if (typeof value === "object" && value !== null) {
      Object.values(value).forEach((val) => countWords(val));
    }
  }

  countWords(input);
  return wordCount;
}

export function getReadingTime(input: any): number {
  const totalWords = countWordsDeep(input);
  return Math.ceil(totalWords / 220);
}
