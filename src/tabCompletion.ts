import _tabCompletionData from './tabCompletionData.json'

const tabCompletionData = _tabCompletionData as {
  [key: string]: { [key: string]: string }
}

const abbreviationMap = Object.fromEntries(
  Object.values(tabCompletionData).flatMap(Object.entries),
)

export const getTabCompletion = (partialWord: string): string | undefined => {
  const result = abbreviationMap[partialWord]
  return result
}
