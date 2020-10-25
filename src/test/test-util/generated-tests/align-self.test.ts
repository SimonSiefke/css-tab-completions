import { getTabCompletion } from '../../../tabCompletion'

test('align-self.test.txt', () => {
  expect(getTabCompletion('as')).toEqual('align-self: ')
  expect(getTabCompletion('ase')).toEqual('align-self: end;')
})
