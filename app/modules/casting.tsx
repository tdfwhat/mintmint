import { client } from '@/sanity/lib/client'
import { castingQuery } from '@/sanity/lib/queries'

import Header from "~/components/header"
import ProjectNav from "~/components/project-nav"
import Img from "~/components/img"
import Footer from "~/modules/footer"
import { Locale, pathByLocale, textByLocale } from '~/components/helpers/helpers'
import { PortableText } from 'next-sanity'


function splitPortableTextOnEmptyParagraph(blocks: any[]) {
  if (!Array.isArray(blocks)) return { head: [], tail: [] };

  const emptyIndex = blocks.findIndex(
    (block) =>
      block._type === 'block' &&
      (!block.children || block.children.length === 0 || block.children.every((c: any) => !c.text || /^\s*$/.test(c.text)))
  );

  if (emptyIndex === -1) return { head: blocks, tail: [] };

  return {
    head: blocks.slice(0, emptyIndex + 1),
    tail: blocks.slice(emptyIndex + 1),
  };
}

function ExpandablePortableText({ locale, value }: { locale: string, value: any[] }) {
  const { head, tail } = splitPortableTextOnEmptyParagraph(value);

  if (!tail.length) return <PortableText value={value} />;

  const showMore = textByLocale(locale, "Visa mer", "Show more");
  const showLess = textByLocale(locale, "Visa mindre", "Show less");

  return (
    <>
      <PortableText value={head} />
      <details className="flex flex-col space-y-4">
        <PortableText value={tail} />
        <summary className="cursor-pointer flex w-fit self-center order-last custom-summary-label" aria-label={showMore}></summary>
      </details>
      
      <style>{`
        .custom-summary-label::after {
          content: '${showMore}';
        }
        details[open] > .custom-summary-label::after {
          content: '${showLess}';
        }
        details > summary {
          list-style: none;
        }
        details > summary::-webkit-details-marker {
          display: none;
        }
      `}</style>
    </>
  );
}

export default async function Casting({ locale }: { locale: string }) {
  const theme = "theme-yellow"
  const { projects, contentSv, contentEn } = await client.fetch(castingQuery)

  return (
    <div className={`${theme} flex flex-col min-h-screen`}>
      <Header locale={locale} page="casting" />

      <main className="mx-auto w-full max-w-5xl p-8 space-y-12 flex-1">
        <ProjectNav locale={locale} current="casting" />

        <section className="text-chunk" aria-label="Casting information">
          <Locale
            locale={locale}
            sv={<ExpandablePortableText locale={locale} value={contentSv} />}
            en={<ExpandablePortableText locale={locale} value={contentEn} />}
          />
        </section>

        <section className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3" aria-label="Casting projects">
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
