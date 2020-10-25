import { getTabCompletion } from '../../../tabCompletion'

test('text-decoration.test.txt', () => {
  expect(getTabCompletion('tdn')).toEqual('text-decoration: none;')
})
