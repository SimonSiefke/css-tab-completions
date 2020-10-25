import { getTabCompletion } from '../../../tabCompletion'

test('word-wrap.test.txt', () => {
  expect(getTabCompletion('word-wrap')).toEqual('word-wrap: ')
  expect(getTabCompletion('ww')).toEqual('word-wrap: ')
})
