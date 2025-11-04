import { client } from '@/sanity/lib/client'
import { bookQuery } from '@/sanity/lib/queries'

import Header from "~/components/header"
import ProjectNav from "@/app/components/project-nav"
import Img from "~/components/img"
import Footer from "~/modules/footer"
import { pathByLocale } from '~/components/helpers/helpers'

export default async function Book({ locale }: { locale: string }) {
  const theme = "theme-blue"

  const { projects } = await client.fetch(bookQuery)

  return (
    <div className={`${theme} flex flex-col min-h-screen`}>
      <Header locale={locale} page="book-and-picture"/>
      
      <main className="mx-auto w-full max-w-5xl p-8 space-y-12 flex-1">
        <ProjectNav locale={locale} current="book-and-picture" />

        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
        </div>
      </main>

      <Footer locale={locale} />
    </div>
  )
}
