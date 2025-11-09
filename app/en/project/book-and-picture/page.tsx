import type { Metadata } from 'next'
import Module from '~/modules/book-and-picture'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Book & Picture',
  alternates: {
    canonical: '/en/project/book-and-picture',
    languages: {
      'sv': '/project/book-and-picture',
      'en': '/en/project/book-and-picture'
    }
  },
  openGraph: {
    title: 'Book & Picture',
    locale: 'en_US',
    url: '/en/project/book-and-picture'
  }
}

export default function Page() {
  return <Module locale="en" />
}
