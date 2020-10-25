import { getTabCompletion } from '../../../tabCompletion'

test('appearance.test.txt', () => {
  expect(getTabCompletion('ap')).toEqual('appearance: none;')
  expect(getTabCompletion('apn')).toEqual('appearance: none;')
})
