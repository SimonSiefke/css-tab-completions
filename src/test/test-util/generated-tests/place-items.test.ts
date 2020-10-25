import { getTabCompletion } from '../../../tabCompletion'

test('place-items.test.txt', () => {
  expect(getTabCompletion('plac')).toEqual('place-items: center;')
  expect(getTabCompletion('pla')).toEqual('place-items: ')
})
