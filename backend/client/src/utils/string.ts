export const trimToLength = (characterLength: number, words: string) => {
  const short = words.slice(0, characterLength)
  return words.length > characterLength ? short.slice(0, short.lastIndexOf(' ')) : words
}
