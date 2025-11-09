import type { Metadata } from 'next'
import Module from '~/modules/film'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Film',
  alternates: {
    canonical: '/project/film',
    languages: {
      'sv': '/project/film',
      'en': '/en/project/film'
    }
  },
  openGraph: {
    title: 'Film',
    locale: 'sv_SE',
    url: '/project/film'
  }
}

export default function Page() {
  return <Module locale="sv" />
}

