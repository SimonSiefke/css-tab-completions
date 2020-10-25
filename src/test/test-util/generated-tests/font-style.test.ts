import { getTabCompletion } from '../../../tabCompletion'

test('font-style.test.txt', () => {
  expect(getTabCompletion('fsn')).toEqual('font-style: normal;')
})
