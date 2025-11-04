'use client'

import Link from "next/link"
import { useState } from "react"

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
      <Link href={link} className="relative block group overflow-hidden">
        {img}
        <div className="absolute inset-0 flex items-center justify-center opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <span className="text-white text-3xl font-semibold [text-shadow:0_1px_2px_rgba(0,0,0,0.5)] [text-stroke:2px_rgba(0,0,0,0.5)]">{label}</span>
        </div>
      </Link>
    )
  }

  if (zoomable) {
    return (
      <div onClick={() => setIsZoomed(true)}>
        {img}

        {isZoomed && (
          <div
            className="fixed inset-0 bg-white/80 flex items-center justify-center p-8 z-20"
            onClick={(e) => {
              e.stopPropagation()
              setIsZoomed(false)
            }}
          >
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
