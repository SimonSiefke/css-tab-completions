import { getTabCompletion } from '../../../tabCompletion'

test('text-align.test.txt', () => {
  expect(getTabCompletion('text-align')).toEqual('text-align: ')
  expect(getTabCompletion('tac')).toEqual('text-align: center;')
  expect(getTabCompletion('taj')).toEqual('text-align: justify;')
  expect(getTabCompletion('tar')).toEqual('text-align: right;')
  expect(getTabCompletion('tal')).toEqual('text-align: left;')
  // expect(getTabCompletion('textalign')).toEqual('text-align: ')
})
