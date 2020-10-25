import { getTabCompletion } from '../../../tabCompletion'

test('border-radius.test.txt', () => {
  expect(getTabCompletion('border-radius')).toEqual('border-radius: ')
  expect(getTabCompletion('br')).toEqual('border-radius: ')
})
