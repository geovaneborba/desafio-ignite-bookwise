/* eslint-disable no-prototype-builtins */
export function findMostFrequentCategory(categories: string[]): string {
  const categoryCount: { [category: string]: number } = {}

  // Contar a ocorrência de cada categoria
  for (const category of categories) {
    if (categoryCount.hasOwnProperty(category)) {
      categoryCount[category]++
    } else {
      categoryCount[category] = 1
    }
  }

  let mostFrequentCategory = ''
  let maxCount = 0

  // Encontrar a categoria com o maior número de ocorrências
  for (const category in categoryCount) {
    if (categoryCount.hasOwnProperty(category)) {
      if (categoryCount[category] > maxCount) {
        mostFrequentCategory = category
        maxCount = categoryCount[category]
      }
    }
  }

  return mostFrequentCategory
}
