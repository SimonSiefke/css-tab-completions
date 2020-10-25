import { getTabCompletion } from '../../../tabCompletion'

test('grid-area.test.txt', () => {
  expect(getTabCompletion('ga')).toEqual('grid-area: ')
})
