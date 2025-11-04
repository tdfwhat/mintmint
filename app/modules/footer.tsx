import { client } from "@/sanity/lib/client";
import { footerQuery } from "@/sanity/lib/queries";

import Instagram from "@/app/components/svg/instagram";
import Facebook from "@/app/components/svg/facebook";
import Logo from "@/app/components/svg/logo";
import { textByLocale } from "@/app/components/helpers/helpers";

export default async function Footer({ locale, }: { locale: string }) {
  const {   
    visitingAddress,
    mailingAddress,
    emailAddress,
    instagram,
    facebook
 } = await client.fetch(footerQuery)

  return (
    <footer className={'bg-(--main-color) w-full'}>
      <div className="py-12 px-8 text-white max-w-5xl flex md:flex-row flex-col mx-auto justify-between gap-6 md:gap-16">
        <div className="flex md:flex-row flex-col gap-6 md:gap-16">
          <div className="my-auto">
            <Logo className="w-24 h-24" white dangle={false} />
          </div>

          <div>
            {visitingAddress && (
              <div className="flex flex-col">
                <span>{textByLocale(locale, "Besöksadress", "Visiting address")}</span>
                <span>{visitingAddress}</span>
              </div>
            )}

            {mailingAddress && (
              <div className="flex flex-col">
                <span>{textByLocale(locale, "Postadress", "Mailing address")}</span>
                <span>{mailingAddress}</span>
              </div>
            )}

            {emailAddress && (
              <div className="flex flex-col">
                <span>Email</span>
                <span>{emailAddress}</span>
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-8 items-center">
          <a href={instagram} aria-label="Instagram">
            <Instagram />
          </a>

          <a href={facebook} aria-label="Facebook">
            <Facebook />
          </a>
        </div>
      </div>
    </footer>
  )
}
