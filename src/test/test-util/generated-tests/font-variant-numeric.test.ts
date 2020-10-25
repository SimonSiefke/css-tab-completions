import { getTabCompletion } from '../../../tabCompletion'

test('font-variant-numeric.test.txt', () => {
  expect(getTabCompletion('font-variant-numeric')).toEqual('font-variant-numeric: ')
  expect(getTabCompletion('fvn')).toEqual('font-variant-numeric: ')
})
