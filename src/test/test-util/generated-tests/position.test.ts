import { getTabCompletion } from '../../../tabCompletion'

test('position.test.txt', () => {
  expect(getTabCompletion('position')).toEqual('position: ')
  expect(getTabCompletion('psa')).toEqual('position: absolute;')
  expect(getTabCompletion('psf')).toEqual('position: fixed;')
  expect(getTabCompletion('position')).toEqual('position: ')
  expect(getTabCompletion('ps')).toEqual('position: ')
  expect(getTabCompletion('pss')).toEqual('position: static;')
})
