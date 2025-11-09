import { client } from '@/sanity/lib/client'
import { filmQuery } from '@/sanity/lib/queries'

import Header from "~/components/header"
import ProjectNav from "@/app/components/project-nav"
import Img from "~/components/img"
import Footer from "~/modules/footer"
import { pathByLocale } from '~/components/helpers/helpers'

export default async function Film({ locale }: { locale: string }) {
  const { projects } = await client.fetch(filmQuery)

  return (
    <div className='flex flex-col min-h-screen'>
      <Header locale={locale} page="film" />

      <main className="mx-auto w-full max-w-5xl p-8 space-y-12 flex-1">
        <ProjectNav locale={locale} current="film" />

        <section className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3" aria-label="Film projects">
          {projects.map((project: any) => (
            <Img
              key={project.slug.current}
              image={project.mainImage}
              alt={project.title}
              className="w-full h-48 object-cover"
              link={pathByLocale(locale, `/project/${project.slug.current}`)}
              label={project.title}
            />
          ))}
        </section>
      </main>

      <Footer locale={locale} />
    </div>
  )
}
