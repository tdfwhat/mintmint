import type { Metadata } from 'next'
import { client } from '@/sanity/lib/client'
import { projectSlugsQuery, projectQuery } from '@/sanity/lib/queries'
import { portableTextToPlainText } from '~/components/helpers/helpers'

import Module from '~/modules/project'

export const dynamic = 'force-static'

export async function generateStaticParams() {
  const data: { slug: string | null }[] = await client.fetch(projectSlugsQuery)
  return data.filter(p => p.slug).map(p => ({ slug: p.slug as string }))
}

export async function generateMetadata({ params }: { params: { slug: string } | Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = await client.fetch(projectQuery, { slug })
  
  const descriptionText = portableTextToPlainText(project.descriptionEn)
  
  return {
    title: project.title,
    description: descriptionText,
    alternates: {
      canonical: `/en/project/${slug}`,
      languages: {
        'sv': `/project/${slug}`,
        'en': `/en/project/${slug}`
      }
    },
    openGraph: {
      title: project.title,
      description: descriptionText,
      locale: 'en_US',
      url: `/en/project/${slug}`,
      type: 'article',
      images: project.mainImage?.asset?.url ? [{
        url: project.mainImage.asset.url,
        width: project.mainImage.asset.metadata?.dimensions?.width,
        height: project.mainImage.asset.metadata?.dimensions?.height,
        alt: project.title
      }] : []
    }
  }
}

export default async function Page({ params }: { params: { slug: string } | Promise<{ slug: string }> }) {
  const { slug } = await params
  return <Module locale="en" slug={slug} />
}
