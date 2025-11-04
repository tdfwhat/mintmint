import Link from "next/link"

import { textByLocale, pathByLocale } from "~/components/helpers/helpers"

export default function ProjectNav({ locale, current }: { locale: string, current: "film" | "event" | "casting" | "book-and-picture" }) {
  const style = (c: string) => (c === current ? `underline underline-decorated text-(--main-color)` : "")

  return (
    <nav className="flex gap-8 text-2xl font-bold">
      <Link className={style("film")} href={pathByLocale(locale, "/project/film")}>Film</Link>
      <Link className={style("event")} href={pathByLocale(locale, "/project/event")}>Event</Link>
      <Link className={style("casting")} href={pathByLocale(locale, "/project/casting")}>Casting</Link>
      <Link className={style("book-and-picture")} href={pathByLocale(locale, "/project/book-and-picture")}>{textByLocale(locale, "Bok & Bild", "Book & Picture")}</Link>
    </nav >
  )
}
