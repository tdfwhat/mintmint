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