'use client'

import { useState } from 'react'
import Img from '~/components/img'

type VideoWithFallbackProps = {
  videoUrl: string
  mainImage: any
  title: string
}

export default function VideoWithFallback({ videoUrl, mainImage, title }: VideoWithFallbackProps) {
  const [videoFailed, setVideoFailed] = useState(false);
  
  const showVideo = videoUrl && !videoFailed;
  const showImage = !videoUrl || videoFailed;

  return (
    <>
      {showImage && mainImage && (
        <Img 
          image={mainImage} 
          alt={title} 
          className="w-full"
          loading="eager" 
          maxWidth={2560} 
          sizes="100vw" 
        />
      )}

      {showVideo && (
        <video 
          className="w-full" 
          autoPlay 
          muted 
          loop
          onError={() => setVideoFailed(true)}
        >
          <source src={videoUrl} />
          <track kind="captions" />
        </video>
      )}
    </>
  )
}
