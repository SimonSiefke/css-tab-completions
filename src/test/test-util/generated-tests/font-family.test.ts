import { getTabCompletion } from '../../../tabCompletion'

test('font-family.test.txt', () => {
  expect(getTabCompletion('ff')).toEqual('font-family: ')
})
