import { getTabCompletion } from '../../../tabCompletion'

test('box-shadow.test.txt', () => {
  expect(getTabCompletion('box-shadow')).toEqual('box-shadow: ')
  expect(getTabCompletion('bsn')).toEqual('box-shadow: none;')
})
