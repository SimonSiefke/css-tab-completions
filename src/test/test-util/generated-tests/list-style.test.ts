import { getTabCompletion } from '../../../tabCompletion'

test('list-style.test.txt', () => {
  expect(getTabCompletion('lsn')).toEqual('list-style: none;')
})
