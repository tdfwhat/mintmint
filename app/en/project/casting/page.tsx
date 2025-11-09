import type { Metadata } from 'next'
import Module from '~/modules/casting'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Casting',
  alternates: {
    canonical: '/en/project/casting',
    languages: {
      'sv': '/project/casting',
      'en': '/en/project/casting'
    }
  },
  openGraph: {
    title: 'Casting',
    locale: 'en_US',
    url: '/en/project/casting'
  }
}

export default function Page() {
  return <Module locale="en" />
}

