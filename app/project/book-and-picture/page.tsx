import type { Metadata } from 'next'
import Module from '~/modules/book-and-picture'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Bok & Bild',
  alternates: {
    canonical: '/project/book-and-picture',
    languages: {
      'sv': '/project/book-and-picture',
      'en': '/en/project/book-and-picture'
    }
  },
  openGraph: {
    title: 'Bok & Bild',
    locale: 'sv_SE',
    url: '/project/book-and-picture'
  }
}

export default function Page() {
  return <Module locale="sv" />
}
