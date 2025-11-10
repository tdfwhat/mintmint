'use client';

import type { Metadata } from "next";
import Logo from "~/components/svg/logo";

export const metadata: Metadata = {
  title: "500 - Något gick snett",
  description: "Något gick fel. Gå tillbaka till startsidan.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
          <div style={{ width: '128px' }}>
            <Logo />
          </div>
          <h1 style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }} aria-label="Något har gått riktigt snett">
            <span style={{ transform: 'rotate(0deg)' }}>Något</span>
            <span style={{ transform: 'rotate(-4deg) translateY(0.1rem)' }}>har</span>
            <span style={{ transform: 'rotate(3deg) translateY(-0.2rem)' }}>gått</span>
            <span style={{ transform: 'rotate(6deg) translateY(0.6rem)' }}>riktigt</span>
            <span style={{ transform: 'rotate(26deg) translateY(2.2rem) translateX(0.6rem)' }}>snett</span>
          </h1>
        </div>
      </body>
    </html>
  )
}
