import type { Metadata } from 'next'
import Module from '~/modules/contact'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Kontakt',
  alternates: {
    canonical: '/contact',
    languages: {
      'sv': '/contact',
      'en': '/en/contact'
    }
  },
  openGraph: {
    title: 'Kontakt',
    locale: 'sv_SE',
    url: '/contact'
  }
}

export default function Page() {
  return <Module locale="sv" />
}

