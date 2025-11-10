'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { pathByLocale, textByLocale } from "~/components/helpers/helpers"
import Logo from "~/components/svg/logo"

export default function Hamburger({ locale, page, white = false }: { locale: string, page?: "home" | "film" | "event" | "casting" | "book-and-picture" | "contact", white?: boolean }) {
  const [isOpen, setIsOpen] = useState(false)
  let path = usePathname()
  path = path.startsWith('/en') ? path.replace('/en', '') : path
  path = path === "" ? "/" : path

  const currentStyle = (c: string) => (c === page ? "opacity-50" : "")
  const localeStyle = (c: string) => (c === locale ? "opacity-50" : "")

  useEffect(() => {
    document.body.style.overflow = ''
  }, [path])

  useEffect(() => {
    const handleResize = () => {
      if (isOpen) {
        setIsOpen(false)
        document.body.style.overflow = ''
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  const closeMenu = () => {
    setIsOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <div className="md:hidden top-12 right-8 z-50 text-white fixed min-h-screen">
      <button
        onClick={toggleMenu}
        className="flex flex-col gap-1.5 p-2 cursor-pointer fade"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span className={`block w-10 h-1.5 rounded-full ${white ? "bg-white border border-black/50" : "bg-(--main-color)"}`} />
        <span className={`block w-10 h-1.5 rounded-full ${white ? "bg-white border border-black/50" : "bg-(--main-color)"}`} />
        <span className={`block w-10 h-1.5 rounded-full ${white ? "bg-white border border-black/50" : "bg-(--main-color)"}`} />
      </button>

      <nav
        className={`fixed inset-0 w-full h-full transform transition-transform duration-300 ease-in-out overflow-y-auto bg-(--main-color) ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        aria-label={textByLocale(locale, "Huvudmeny", "Main menu")}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col items-center pt-36 min-h-full p-8 gap-8">
          <button
            onClick={closeMenu}
            className="absolute top-12 right-8 text-5xl cursor-pointer fade"
            aria-label="Close menu"
          >
            &times;
          </button>

          <div className="flex flex-col items-center gap-8 text-3xl font-bold flex-1">
            <Link
              className={currentStyle("home")}
              href={pathByLocale(locale, "/")}
            >
              {textByLocale(locale, "Hem", "Home")}
            </Link>

            <Link
              className={currentStyle("film")}
              href={pathByLocale(locale, "/project/film")}
            >
              Film
            </Link>

            <Link
              className={currentStyle("event")}
              href={pathByLocale(locale, "/project/event")}
            >
              Event
            </Link>

            <Link
              className={currentStyle("casting")}
              href={pathByLocale(locale, "/project/casting")}
            >
              Casting
            </Link>

            {/* <Link */}
            {/*   className={currentStyle("book-and-picture")} */}
            {/*   href={pathByLocale(locale, "/project/book-and-picture")} */}
            {/* > */}
            {/*    {textByLocale(locale, "Bok & Bild", "Book & Picture")} */}
            {/* </Link> */}

            <Link
              className={currentStyle("contact")}
              href={pathByLocale(locale, "/contact")}
            >
              {textByLocale(locale, "Kontakt", "Contact")}
            </Link>

            <div className="flex gap-4 text-xl mt-8" role="group" aria-label={textByLocale(locale, "Välj språk", "Choose language")}>
              <Link href={pathByLocale('sv', path)} className={localeStyle("sv")} aria-label="Svenska" aria-current={locale === 'sv' ? 'page' : undefined}>
                Sv
              </Link>
              <Link href={pathByLocale('en', path)} className={localeStyle("en")} aria-label="English" aria-current={locale === 'en' ? 'page' : undefined}>
                En
              </Link>
            </div>
          </div>

          <Logo locale={locale} className="min-w-36 w-36 min-h-36 h-36 mb-16" white />
        </div>
      </nav>
    </div>
  )
}
