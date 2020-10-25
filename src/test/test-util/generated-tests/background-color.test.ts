import { getTabCompletion } from '../../../tabCompletion'

test('background-color.test.txt', () => {
  expect(getTabCompletion('bgc')).toEqual('background-color: ')
})
