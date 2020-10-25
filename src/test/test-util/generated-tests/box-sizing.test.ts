import { getTabCompletion } from '../../../tabCompletion'

test('box-sizing.test.txt', () => {
  expect(getTabCompletion('box-sizing')).toEqual('box-sizing: ')
  expect(getTabCompletion('bsbb')).toEqual('box-sizing: border-box;')
})
