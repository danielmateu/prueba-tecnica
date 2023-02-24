import React from 'react'
import { useCatImage } from '../hooks/useCatImage'

export const Otro = () => {
  const { imageUrl } = useCatImage({ fact: 'Otro' })
  return (
    <>
      {
        imageUrl && <img src={imageUrl} />
     }
    </>
  )
}
