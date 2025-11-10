import { client } from '@/sanity/lib/client'
import { eventQuery } from '@/sanity/lib/queries'

import Header from "~/components/header"
import ProjectNav from "~/components/project-nav"
import Img from "~/components/img"
import Footer from "~/modules/footer"
import { pathByLocale } from '~/components/helpers/helpers'

export default async function Event({ locale }: { locale: string }) {
  const theme = "theme-orange"

  const { projects } = await client.fetch(eventQuery)

  return (
    <div className={`${theme} flex flex-col min-h-screen`}>
      <Header locale={locale} page="event" />

      <main className="mx-auto w-full max-w-5xl p-8 space-y-12 flex-1">
        <ProjectNav locale={locale} current="event" />

        <section className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3" aria-label="Event projects">
          {projects?.map((project: any) => (
            <Img
              key={project.slug.current}
              image={project.mainImage}
              alt={project.title}
              className="w-full h-48 object-cover"
              link={pathByLocale(locale, `/project/${project.slug.current}`)}
              label={project.title}
              maxWidth={800}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
          ))}
        </section>
      </main>
      
      <Footer locale={locale} />
    </div>
  )
}
