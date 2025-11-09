import type { Metadata } from 'next'
import Module from '~/modules/contact'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Contact',
  alternates: {
    canonical: '/en/contact',
    languages: {
      'sv': '/contact',
      'en': '/en/contact'
    }
  },
  openGraph: {
    title: 'Contact',
    locale: 'en_US',
    url: '/en/contact'
  }
}

export default function Page() {
  return <Module locale="en" />
}

