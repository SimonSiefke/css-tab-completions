import { getTabCompletion } from '../../../tabCompletion'

test('max-height.test.txt', () => {
  expect(getTabCompletion('mah')).toEqual('max-height: ')
})
