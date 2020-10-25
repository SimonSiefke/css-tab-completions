import { getTabCompletion } from '../../../tabCompletion'

test('margin.test.txt', () => {
  expect(getTabCompletion('m')).toEqual('margin:')
})
