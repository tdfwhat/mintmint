import type { Metadata } from 'next'
import Module from '~/modules/film'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Film',
  alternates: {
    canonical: '/en/project/film',
    languages: {
      'sv': '/project/film',
      'en': '/en/project/film'
    }
  },
  openGraph: {
    title: 'Film',
    locale: 'en_US',
    url: '/en/project/film'
  }
}

export default function Page() {
  return <Module locale="en" />
}

