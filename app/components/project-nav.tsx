import Link from "next/link"

import { textByLocale, pathByLocale } from "~/components/helpers/helpers"

export default function ProjectNav({ locale, current }: { locale: string, current: "film" | "event" | "casting" | "book-and-picture" }) {
  const style = (c: string) => (c === current ? `underline underline-decorated text-(--main-color)` : "")

  return (
    <nav className="flex gap-8 text-2xl font-bold" aria-label={textByLocale(locale, "Projektkategorier", "Project categories")}>
      <Link className={style("film")} href={pathByLocale(locale, "/project/film")} aria-current={current === "film" ? "page" : undefined}>Film</Link>
      <Link className={style("event")} href={pathByLocale(locale, "/project/event")} aria-current={current === "event" ? "page" : undefined}>Event</Link>
      <Link className={style("casting")} href={pathByLocale(locale, "/project/casting")} aria-current={current === "casting" ? "page" : undefined}>Casting</Link>
      <Link className={style("book-and-picture")} href={pathByLocale(locale, "/project/book-and-picture")} aria-current={current === "book-and-picture" ? "page" : undefined}>{textByLocale(locale, "Bok & Bild", "Book & Picture")}</Link>
    </nav >
  )
}
