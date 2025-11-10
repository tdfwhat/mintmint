import Link from "next/link";
import type { Metadata } from "next";
import Logo from "~/components/svg/logo";

export const metadata: Metadata = {
  title: "404 - Sidan hittades inte",
  description: "Den här sidan kunde inte hittas. Gå tillbaka till startsidan.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="m-auto" role="main">
      <Link 
        href="/" 
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-current"
        aria-label="Gå tillbaka till startsidan"
      >
        <div className="text-chunk p-4 space-y-12">
          <h1 className="flex flex-wrap space-x-4 justify-center" aria-label="Något gick snett">
            <span className="rotate-2">Något</span>
            <span className="-rotate-4">gick</span>
            <span className="rotate-26 translate-y-8">snett</span>
          </h1>

          <Logo 
            className="w-36 h-36 dangle-forever mb-6 mx-auto" 
            dangle={false}
            aria-hidden="true"
          />

          <h2 className="flex flex-wrap space-x-4 justify-center text-2xl font-bold">
            <span className="rotate-6">Gå</span>
            <span className="-rotate-6">tillbaka</span>
          </h2>
        </div>
      </Link>
    </main>
  );
}
