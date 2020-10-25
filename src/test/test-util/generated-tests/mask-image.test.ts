import { getTabCompletion } from '../../../tabCompletion'

test('mask-image.test.txt', () => {
  expect(getTabCompletion('mask-image')).toEqual('mask-image: ')
  expect(getTabCompletion('mai')).toEqual('mask-image: ')
})
