import { getTabCompletion } from '../../../tabCompletion'

test('display.test.txt', () => {
  expect(getTabCompletion('d')).toEqual('display: ')
  expect(getTabCompletion('db')).toEqual('display: block;')
  expect(getTabCompletion('df')).toEqual('display: flex;')
  expect(getTabCompletion('dn')).toEqual('display: none;')
})
