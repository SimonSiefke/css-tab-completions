import { getTabCompletion } from '../../../tabCompletion'

test('margin.test.txt', () => {
  expect(getTabCompletion('margin')).toEqual('margin: ')
  expect(getTabCompletion('m')).toEqual('margin: ')
  expect(getTabCompletion('ma')).toEqual('margin: auto;')
  expect(getTabCompletion('m0a')).toEqual('margin: 0 auto;')
})
