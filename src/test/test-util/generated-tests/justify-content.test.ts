import { getTabCompletion } from '../../../tabCompletion'

test('justify-content.test.txt', () => {
  expect(getTabCompletion('jc')).toEqual('justify-content: ')
})
