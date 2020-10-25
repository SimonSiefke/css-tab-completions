import * as vscode from 'vscode'
import { getTabCompletion } from './tabCompletion'

const cssTabCompletion = (textEditor: vscode.TextEditor) => {
  const wordRange = textEditor.document.getWordRangeAtPosition(
    textEditor.selection.active,
  )
  const partialWord = textEditor.document.getText(wordRange)
  const tabCompletion = getTabCompletion(partialWord)
  if (tabCompletion) {
    textEditor.insertSnippet(new vscode.SnippetString(tabCompletion), wordRange)
  }
}

export const activate = (context: vscode.ExtensionContext) => {
  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand(
      'css-tab-completion',
      cssTabCompletion,
    ),
  )
}
