import { client } from '@/sanity/lib/client'
import { projectQuery } from '@/sanity/lib/queries'

import Img from "~/components/img"
import { PortableText } from "@portabletext/react"
import Header from "~/components/header"
import { Locale } from "~/components/helpers/helpers"
import Footer from "~/modules/footer"

export default async function Project({ locale, slug }: { locale: string, slug: string }) {
  const { mainImage, videoUrl, title, projectType, descriptionSv, descriptionEn, images } = await client.fetch(projectQuery, { slug })

  const themeMapper = {
    film: "theme-green",
    casting: "theme-yellow",
    event: "theme-orange",
    "book-and-picture": "theme-blue"
  }

  return (
    <div className={`${themeMapper[projectType]} flex flex-col min-h-screen`}>
      <Header locale={locale} page={projectType} />

      <main className="flex-1">
        {videoUrl ? (
          <video className="w-full" autoPlay muted loop>
            <source src={videoUrl} />
            <track kind="captions" />
          </video>
        ) : mainImage ? (
          <Img image={mainImage} alt={title} className="w-full" loading="eager" maxWidth={2560} sizes="100vw" />
        ) : null}

        <article className="mx-auto max-w-5xl p-12 space-y-12">
          <div className="text-chunk">
            <h1 className="text-3xl font-bold">{title}</h1>
            <Locale locale={locale}
              sv={<PortableText value={descriptionSv} />}
              en={<PortableText value={descriptionEn} />}
            />
          </div>

          {images && images.length > 0 && (
            <section className="flex flex-wrap gap-4" aria-label="Project gallery">
              {images.map((image: any, index: number) => (
                <Img 
                  key={index} 
                  image={image} 
                  skipDimensions 
                  zoomable 
                  alt={`${title} ${index + 1}`} 
                  className="h-48 cursor-pointer object-cover" 
                  maxWidth={600}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                />
              ))}
            </section>
          )}
        </article>
      </main>

      <Footer locale={locale} />
    </div>
  )
}
