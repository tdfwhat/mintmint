import { client } from "@/sanity/lib/client"
import { contactQuery } from "@/sanity/lib/queries"

import { PortableText } from "next-sanity"
import Header from "~/components/header"
import { Locale } from "~/components/helpers/helpers"
import Img from "~/components/img"
import Footer from "~/modules/footer"

export default async function Contact({ locale }: { locale: string }) {
  const { people } = await client.fetch(contactQuery)

  return (
    <div className='flex flex-col min-h-screen'>
      <Header locale={locale} page="contact" />

      <main className="mx-auto w-full max-w-5xl p-8 space-y-12 flex-1">
        <section className="flex flex-col space-y-8">
          {people.map((person: any) => (
            <article key={person.name} className="flex flex-col lg:flex-row even:lg:flex-row-reverse even:lg:text-right" >
              <div className="max-w-sm lg:w-1/3">
                <Img className="w-full" image={person.avatar} alt={person.name} />
              </div>

              <div className="flex flex-col sm:w-full lg:w-1/2 py-4 lg:py-2 lg:px-8 space-y-2">
                <h2 className="text-2xl font-bold">{person.name}</h2>
                <Locale locale={locale}
                  sv={<PortableText value={person.contentSv} />}
                  en={<PortableText value={person.contentEn} />}
                />
              </div>
            </article>
          ))}
        </section>
      </main>

      <Footer locale={locale} />
    </div>
  )
}


