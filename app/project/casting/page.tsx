import type { Metadata } from 'next'
import Module from '~/modules/casting'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Casting',
  alternates: {
    canonical: '/project/casting',
    languages: {
      'sv': '/project/casting',
      'en': '/en/project/casting'
    }
  },
  openGraph: {
    title: 'Casting',
    locale: 'sv_SE',
    url: '/project/casting'
  }
}

export default function Page() {
  return <Module locale="sv" />
}

