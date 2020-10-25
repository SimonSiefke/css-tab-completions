import { getTabCompletion } from '../../../tabCompletion'

test('font-weight.test.txt', () => {
  expect(getTabCompletion('fwn')).toEqual('font-weight: normal;')
})
