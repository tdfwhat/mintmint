'use client'

import Img from '~/components/img' // adjust path as needed

interface VideoWithFallbackProps {
  videoUrl: string
  mainImage: any
  title: string
}

export default function VideoWithFallback({ videoUrl, mainImage, title }: VideoWithFallbackProps) {
  return (
    <>
      {mainImage && (
        <Img 
          image={mainImage} 
          alt={title} 
          className="w-full"
          loading="eager" 
          maxWidth={2560} 
          sizes="100vw" 
        />
      )}
      {videoUrl && (
        <video 
          className="w-full hidden" 
          autoPlay 
          muted 
          loop
          onLoadedData={(e) => {
            e.currentTarget.style.display = 'block';
            const img = e.currentTarget.previousElementSibling;
            if (img) (img as HTMLElement).style.display = 'none';
          }}
        >
          <source src={videoUrl} />
          <track kind="captions" />
        </video>
      )}
    </>
  )
}
