import { getTabCompletion } from '../../../tabCompletion'

test('left.test.txt', () => {
  expect(getTabCompletion('l')).toEqual('left: ')
})
