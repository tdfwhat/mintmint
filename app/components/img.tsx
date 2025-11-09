'use client'

import Link from "next/link"
import { useState, useEffect } from "react"

type ImgProps = {
  asset: {
    url: string
    metadata: {
      dimensions: {
        width: number
        height: number
      }
    }
  }
}

export default function Img({
  image,
  className = "",
  alt = "",
  loading = "lazy",
  link,
  label,
  skipDimensions = false,
  zoomable = false,
}: {
  image: ImgProps,
  className?: string,
  alt?: string,
  loading?: "lazy" | "eager",
  link?: string,
  label?: string,
  skipDimensions?: boolean,
  zoomable?: boolean,
}) {
  const [isZoomed, setIsZoomed] = useState(false)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isZoomed) {
        setIsZoomed(false)
      }
    }

    if (isZoomed) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isZoomed])

  const img = (
    <img
      src={image.asset.url}
      className={`${className}${zoomable ? " fade cursor-pointer" : ""}`}
      alt={alt}
      width={skipDimensions ? undefined : image.asset.metadata.dimensions.width}
      height={skipDimensions ? undefined : image.asset.metadata.dimensions.height}
      loading={loading}
    />
  )

  if (link && label) {
    return (
      <Link href={link} className="relative block group overflow-hidden" aria-label={label}>
        {img}
        <div className="absolute inset-0 flex items-center justify-center opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden="true">
          <span className="text-white text-3xl font-semibold [text-shadow:0_1px_2px_rgba(0,0,0,0.5)] [text-stroke:2px_rgba(0,0,0,0.5)]">{label}</span>
        </div>
      </Link>
    )
  }

  if (zoomable) {
    return (
      <div>
        <button
          onClick={() => setIsZoomed(true)}
          className={`${className} fade cursor-pointer border-0 p-0 bg-transparent`}
          aria-label={`Zooma in bild${alt ? `: ${alt}` : ''}`}
        >
          {img}
        </button>

        {isZoomed && (
          <div
            className="fixed inset-0 bg-white/80 flex items-center justify-center p-8 z-20"
            onClick={() => setIsZoomed(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Zoomad bild"
          >
            <button
              onClick={(e) => {
                e.stopPropagation()
                setIsZoomed(false)
              }}
              className="absolute top-4 right-4 text-4xl bg-transparent border-0 cursor-pointer fade p-2"
              aria-label="Stäng zoomad bild"
            >
              &times;
            </button>
            <img
              src={image.asset.url}
              alt={alt}
              className="max-w-full max-h-full"
            />
          </div>
        )}
      </div>
    )
  }

  return img
}
