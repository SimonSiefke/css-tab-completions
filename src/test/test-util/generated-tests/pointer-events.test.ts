import { getTabCompletion } from '../../../tabCompletion'

test('pointer-events.test.txt', () => {
  // expect(getTabCompletion('pointerevents')).toEqual('pointer-events: ')
  expect(getTabCompletion('pe')).toEqual('pointer-events: ')
  expect(getTabCompletion('pen')).toEqual('pointer-events: none;')
  expect(getTabCompletion('pea')).toEqual('pointer-events: auto;')
  // expect(getTabCompletion('point-events')).toEqual('pointer-events: ')
})
