import { client } from '~/../sanity/lib/client'
import { projectSlugsQuery } from '~/../sanity/lib/queries'

import Module from '~/modules/project'

export const dynamic = 'force-static'

export async function generateStaticParams() {
  const data: { slug: string | null }[] = await client.fetch(projectSlugsQuery)
  return data.filter(p => p.slug).map(p => ({ slug: p.slug as string }))
}

export default async function Page({ params }: { params: { slug: string } | Promise<{ slug: string }> }) {
  const { slug } = await params
  return <Module locale="en" slug={slug} />
}
