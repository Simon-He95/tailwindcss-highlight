import { window } from 'vscode'
import { findUp } from 'find-up'

export function getClassNames(
  targetText: string,
): Array<{ start: number; value: string }> {
  const arr = []
  // FIXME: 正規表現だけでは様々なケースに対応できない
  const regexes = [
    /(?:\b(?:class(?:Name)?|tw)\s*=\s*(?:(?:{([^>}]+)})|(["'`][^"'`]+["'`])))/,
    /(?:(clsx|classnames)\()([^)]+)\)/,
  ]
  const regex = new RegExp(regexes.map(r => r.source).join('|'), 'gm')
  const classNameMatches = targetText.matchAll(regex)
  for (const classNameMatch of classNameMatches) {
    const stringMatches = classNameMatch[0].matchAll(
      /(?:["'`]([\s\S.:/${}()[\]"']+)["'`])/g,
    )
    for (const stringMatch of stringMatches) {
      if (classNameMatch.index != null && stringMatch.index != null) {
        arr.push({
          start: classNameMatch.index + stringMatch.index,
          value: stringMatch[0],
        })
      }
    }
  }
  return arr
}

export function getUtility(
  targetText: string,
  regex: RegExp,
): Array<{
  end: number
  start: number
  value: string
}> {
  const arr = []
  const matches = targetText.matchAll(regex)
  for (const match of matches) {
    if (match.index != null) {
      arr.push({
        start: match.index,
        end: match.index + match[0].length,
        value: match[0],
      })
    }
  }
  return arr
}

export async function hasTailwindConfig() {
  const url = window.activeTextEditor?.document.uri.fsPath
  if (!url)
    return

  const config = await findUp(['tailwind.config.js', 'tailwind.config.ts'], { cwd: url })
  return !!config
}
