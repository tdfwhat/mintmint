import type { Metadata } from 'next'
import Module from '~/modules/home'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Home',
  alternates: {
    canonical: '/en',
    languages: {
      'sv': '/',
      'en': '/en'
    }
  },
  openGraph: {
    title: 'Mint',
    locale: 'en_US',
    url: '/en'
  }
}

export default function Page() {
  return <Module locale="en" />
}