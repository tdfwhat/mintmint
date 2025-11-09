import { ReactNode } from 'react'

export function Locale({ locale, sv, en }: {
  locale: string,
  sv: ReactNode,
  en: ReactNode
}): ReactNode {
  return locale === 'sv' ? sv : en
}

export function textByLocale(locale: string, sv: string, en: string): string {
  return locale === 'sv' ? sv : en
}

export function pathByLocale(locale: string, path: string): string {
  return locale === 'sv' ? path : `/en${path}`
}

export function portableTextToPlainText(blocks: any[], opts: { trim: boolean } = { trim: true }): string {
  try {
    const text = blocks
      .map(block =>
        Array.isArray(block.children)
          ? block.children.map(child => child.text).join('')
          : ''
      )
      .join('\n')
      .replace(/\n{2,}/g, '\n')
      .trim();

      return opts.trim ? text.slice(0, 157) + (text.length > 160 ? '...' : '') : text;
  } catch {
    return ''
  }
}