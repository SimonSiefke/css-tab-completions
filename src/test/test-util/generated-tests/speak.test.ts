import { getTabCompletion } from '../../../tabCompletion'

test('speak.test.txt', () => {
  // expect(getTabCompletion('spek')).toEqual('speak: ')
  expect(getTabCompletion('speak')).toEqual('speak: ')
})
