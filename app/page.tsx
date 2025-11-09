import type { Metadata } from 'next'
import Module from '~/modules/home'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
    languages: {
      'sv': '/',
      'en': '/en'
    }
  },
  openGraph: {
    title: 'Mint',
    locale: 'sv_SE',
    url: '/'
  }
}

export default function Page() {
  return <Module locale="sv" />
}