import Link from "next/link"
import { PortableText } from "@portabletext/react"
import { client } from '@/sanity/lib/client'
import { homeQuery } from '@/sanity/lib/queries'

import { Locale, textByLocale, pathByLocale } from "~/components/helpers/helpers"
import Img from "~/components/img"
import Footer from "~/modules/footer"
import Header from "~/components/header"
import Arrow from "@/app/components/svg/arrow";

export default async function Home({ locale }: { locale: string }) {
  const {
    mainImage,
    filmImage,
    eventImage,
    castingImage,
    bookImage,
    whoAreWeImage,
    whatWeDoEn,
    whatWeDoSv
  } = await client.fetch(homeQuery)

  return (
    <div className='flex flex-col min-h-screen'>
      <div className={'relative w-full h-screen'}>
        <Header locale={locale} page="home" />

        <Img image={mainImage} className="w-full h-full object-cover" loading="eager" />

        <div className="absolute inset-0 flex items-center justify-center gap-8 text-white text-3xl font-semibold">
          <Link
            href={pathByLocale(locale, "/project/film")}
            className="[text-shadow:0_1px_2px_rgba(0,0,0,0.5)] [text-stroke:2px_rgba(0,0,0,0.5)]"
          >
            {textByLocale(locale, "Projekt", "Projects")}
          </Link>
          <Link
            href={pathByLocale(locale, "/contact")}
            className="[text-shadow:0_1px_2px_rgba(0,0,0,0.5)] [text-stroke:2px_rgba(0,0,0,0.5)]"
          >
            {textByLocale(locale, "Kontakt", "Contact")}
          </Link>
        </div>

        <div className="absolute left-1/2 bottom-16 -translate-x-1/2 z-20 select-none">
          <a href="#main" className="block text-white text-5xl animate-bounce cursor-pointer hover:opacity-80 transition">
            <Arrow className="w-24 h-24" />
          </a>
        </div>
      </div>

      <main id="main" className="mx-auto max-w-5xl px-8 py-12 space-y-12 flex-1">
        <div className="text-chunk">
          <Locale locale={locale}
            sv={<PortableText value={whatWeDoSv} />}
            en={<PortableText value={whatWeDoEn} />}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-4">
          <Img image={filmImage} link={pathByLocale(locale, "/project/film")} label="Film" className="h-96 w-full object-cover" />
          <Img image={eventImage} link={pathByLocale(locale, "/project/event")} label="Event" className="h-96 w-full object-cover" />
          <Img image={castingImage} link={pathByLocale(locale, "/project/casting")} label="Casting" className="h-96 w-full object-cover" />
          <Img image={bookImage} link={pathByLocale(locale, "/project/book-and-picture")} label={textByLocale(locale, "Bok & Bild", "Book & Picture")} className="h-96 w-full object-cover" />
        </div>

        <div className="text-chunk">
          <Locale locale={locale}
            sv={<h1>Vilka vi är</h1>}
            en={<h1>Who we are</h1>}
          />
        </div>

        <Img image={whoAreWeImage} link={pathByLocale(locale, "/contact")} label={textByLocale(locale, "Kontakt", "Contact")} />
      </main>

      <Footer locale={locale} />
    </div>
  )
}
