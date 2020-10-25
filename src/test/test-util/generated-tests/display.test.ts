import { getTabCompletion } from '../../../tabCompletion'

test('display.test.txt', () => {
  expect(getTabCompletion('display')).toEqual('display: ')
  expect(getTabCompletion('d')).toEqual('display: ')
  expect(getTabCompletion('db')).toEqual('display: block;')
  expect(getTabCompletion('df')).toEqual('display: flex;')
  expect(getTabCompletion('dn')).toEqual('display: none;')
  expect(getTabCompletion('dg')).toEqual('display: grid;')
  expect(getTabCompletion('dib')).toEqual('display: inline-block;')
})
