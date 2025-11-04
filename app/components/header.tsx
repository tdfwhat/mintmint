'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

import Logo from "~/components/svg/logo"
import { pathByLocale, textByLocale } from "~/components/helpers/helpers"
import Hamburger from "~/components/hamburger"

export default function Header({ locale, page }: { locale: string, page: "home" | "film" | "event" | "casting" | "book-and-picture" | "contact" }) {
  let path = usePathname()
  path = path.startsWith('/en') ? path.replace('/en', '') : path
  path = path === "" ? "/" : path

  if (page === "home") {
    return (
      <div className="absolute w-full text-white">
        <header className="mx-auto max-w-5xl p-8 z-50 relative">
          <nav className="flex items-center justify-center gap-8 relative">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 flex justify-center w-36 h-36">
              <Logo locale={locale} className="min-w-36 w-36 min-h-36 h-36" white />
            </div>

            <div className="w-36 h-36" />

            <div className="hidden md:flex items-center ml-auto text-xl font-medium">
              <div className="flex gap-2">
                <Link href={pathByLocale('sv', path)} className={`${locale === 'sv' ? 'opacity-50' : ''}`}>Sv</Link>
                <Link href={pathByLocale('en', path)} className={`${locale === 'en' ? 'opacity-50' : ''}`}>En</Link>
              </div>
            </div>

            <Hamburger locale={locale} page={page} white />
          </nav>
        </header>
      </div>
    )
  }

  return (
    <header className="mx-auto w-full max-w-5xl p-8 z-40">
      <nav className="flex items-center justify-between gap-8">
        <Logo locale={locale} className="w-24 h-24" clickable />

        <div className="hidden md:flex items-center gap-24 text-xl font-medium">
          <div className="flex gap-8">
            <Link href={pathByLocale(locale, "/")}>{textByLocale(locale, "Hem", "Home")}</Link>
            <Link className={page !== "contact" ? "opacity-50" : ""} href={pathByLocale(locale, "/project/film")}>{textByLocale(locale, "Projekt", "Projects")}</Link>
            <Link className={page === "contact" ? "opacity-50" : ""} href={pathByLocale(locale, "/contact")}>{textByLocale(locale, "Kontakt", "Contact")}</Link>
          </div>

          <div className="flex gap-2">
              <Link href={pathByLocale('sv', path)} className={`${locale === 'sv' ? 'opacity-50' : ''}`}>Sv</Link>
              <Link href={pathByLocale('en', path)} className={`${locale === 'en' ? 'opacity-50' : ''}`}>En</Link>
          </div>
        </div>

        <Hamburger locale={locale} page={page} />
      </nav>
    </header>
  )
}
