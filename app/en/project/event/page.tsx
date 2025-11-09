import type { Metadata } from 'next'
import Module from '~/modules/event'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Event',
  alternates: {
    canonical: '/en/project/event',
    languages: {
      'sv': '/project/event',
      'en': '/en/project/event'
    }
  },
  openGraph: {
    title: 'Event',
    locale: 'en_US',
    url: '/en/project/event'
  }
}

export default function Page() {
  return <Module locale="en" />
}

