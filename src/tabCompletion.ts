import _tabCompletionData from './tabCompletionData.json'

const tabCompletionData = _tabCompletionData as {
  [key: string]: { [key: string]: string }
}

const abbreviationMap = Object.fromEntries(
  Object.values(tabCompletionData).flatMap((x) => Object.entries(x)), //?
)

export const getTabCompletion = (partialWord: string): string => {
  const result = abbreviationMap[partialWord]
  return result || ''
}
