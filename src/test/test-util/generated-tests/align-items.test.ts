import { getTabCompletion } from '../../../tabCompletion'

test('align-items.test.txt', () => {
  expect(getTabCompletion('ai')).toEqual('align-items: ')
  expect(getTabCompletion('aic')).toEqual('align-items: center;')
})
