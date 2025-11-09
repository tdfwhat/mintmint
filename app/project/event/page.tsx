import type { Metadata } from 'next'
import Module from '~/modules/event'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Event',
  alternates: {
    canonical: '/project/event',
    languages: {
      'sv': '/project/event',
      'en': '/en/project/event'
    }
  },
  openGraph: {
    title: 'Event',
    locale: 'sv_SE',
    url: '/project/event'
  }
}

export default function Page() {
  return <Module locale="sv" />
}

