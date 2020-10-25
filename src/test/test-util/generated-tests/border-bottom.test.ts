import { getTabCompletion } from '../../../tabCompletion'

test('border-bottom.test.txt', () => {
  expect(getTabCompletion('border-bottom')).toEqual('border-bottom: ')
  expect(getTabCompletion('bb')).toEqual('border-bottom: ')
})
