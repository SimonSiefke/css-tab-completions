import { getTabCompletion } from '../../../tabCompletion'

test('text-transform.test.txt', () => {
  expect(getTabCompletion('ttu')).toEqual('text-transform: uppercase;')
})
