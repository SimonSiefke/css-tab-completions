const fs = require('fs-extra')
const path = require('path')

const failingTests = [
  // 'delete-022-delete-text-between-comment-and-comment.test.txt',
  // '.test.txt',
]

const only = []
const testFiles = fs
  .readdirSync(path.join(__dirname, '..'))
  .filter((file) => file.endsWith('.test.txt'))
  .filter((x) => !failingTests.includes(x))
  .filter((x) => (only.length > 0 ? only.includes(x) : true))

fs.ensureDirSync(path.join(__dirname, 'generated-tests'))

console.log(testFiles)

const RE_BLOCK = /^\n(\(skip\))?\ninput:\n(.*)\n\noutput:\n(.*)\n\n$/

const createExpectBlock = (block) => {
  const match = block.match(RE_BLOCK)
  if (!match) {
    console.log(block)
    throw new Error('invalid block')
  }
  const skip = match[1]
  const input = match[2]
  const output = match[3]
  if (skip) {
    return `  // expect(getTabCompletion('${input}')).toEqual('${output}')`
  } else {
    return `  expect(getTabCompletion('${input}')).toEqual('${output}')`
  }
}

const createTestFile = (fileName) => {
  const testFile = fs.readFileSync(
    path.join(__dirname, '..', fileName),
    'utf-8',
  )
  const splits = testFile.split('--------------------')
  if (splits.length < 3) {
    throw new Error(`malformed blocks ${fileName}`)
  }
  const blocks = splits.slice(1, -1)
  const expectBlocks = blocks.map(createExpectBlock)
  const fileContent = `import { getTabCompletion } from '../../../tabCompletion'

test('${fileName}', () => {
${expectBlocks.join('\n')}
})
`
  fs.writeFileSync(
    path.join(__dirname, 'generated-tests', fileName.replace(/\.txt$/, '.ts')),
    fileContent,
  )
}

testFiles.forEach(createTestFile)

console.log('generated diff tests ✔️')
