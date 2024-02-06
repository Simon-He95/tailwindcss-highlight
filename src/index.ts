import type { ExtensionContext } from 'vscode'
import { window, workspace } from 'vscode'

import { Configuration } from './utils/configuration'
import { Decoration } from './utils/decoration'
import { hasTailwindConfig } from './utils/utils'

export async function activate(context: ExtensionContext): Promise<void> {
  if (!await hasTailwindConfig())
    return
  const configuration = new Configuration()
  const decoration = new Decoration(configuration)
  decoration.update()

  context.subscriptions.push(window.onDidChangeActiveTextEditor(
    (editor) => {
      decoration.update()
    },
    null,
    context.subscriptions,
  ))
  context.subscriptions.push(workspace.onDidChangeTextDocument(
    (event) => {
      decoration.update()
    },
    null,
    context.subscriptions,
  ))
  context.subscriptions.push(workspace.onDidChangeConfiguration(
    (event) => {
      const configuration = new Configuration()
      decoration.update(configuration)
    },
    null,
    context.subscriptions,
  ))
}

export async function deactivate(): Promise<void> {
  const configuration = new Configuration()
  const decoration = new Decoration(configuration)
  decoration.dispose()
}
