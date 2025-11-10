'use client'

import Link from "next/link"
import { useState, useEffect } from "react"
import imageUrlBuilder from '@sanity/image-url'
import { dataset, projectId } from '@/sanity/env'

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

const builder = imageUrlBuilder({ projectId, dataset })

export default function Img({
  image,
  className = "",
  alt = "",
  loading = "lazy",
  link,
  label,
  skipDimensions = false,
  zoomable = false,
  maxWidth,
  sizes,
}: {
  image: ImgProps,
  className?: string,
  alt?: string,
  loading?: "lazy" | "eager",
  link?: string,
  label?: string,
  skipDimensions?: boolean,
  zoomable?: boolean,
  maxWidth?: number,
  sizes?: string,
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

  const getImageUrl = (width?: number) => {
    let urlBuilder = builder.image(image)
    if (width) {
      urlBuilder = urlBuilder.width(width).auto('format').quality(85)
    }
    return urlBuilder.url()
  }

  const generateSrcSet = () => {
    if (!maxWidth) return undefined
    
    const widths = [
      Math.round(maxWidth * 0.5),
      maxWidth,
      Math.round(maxWidth * 1.5),
      Math.round(maxWidth * 2)
    ].filter((w, i, arr) => arr.indexOf(w) === i)
    
    return widths.map(w => `${getImageUrl(w)} ${w}w`).join(', ')
  }

  const srcUrl = maxWidth ? getImageUrl(maxWidth) : image.asset.url
  const srcSet = generateSrcSet()
  const sizesAttr = sizes || (maxWidth ? `(max-width: ${maxWidth}px) 100vw, ${maxWidth}px` : undefined)

  const img = (
    <img
      src={srcUrl}
      srcSet={srcSet}
      sizes={sizesAttr}
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
          <span className="text-white text-3xl text-center px-4 font-semibold [text-shadow:0_1px_2px_rgba(0,0,0,0.5)] [text-stroke:2px_rgba(0,0,0,0.5)]">{label}</span>
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
              loading="eager"
            />
          </div>
        )}
      </div>
    )
  }

  return img
}
