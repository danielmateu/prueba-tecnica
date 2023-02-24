import { useEffect, useState } from 'react'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return
    const firstTrheeWords = fact.split(' ', 3).join(' ')
    // console.log(firstTrheeWords)
    const catImageUrl = `https://cataas.com/cat/says/${firstTrheeWords}?size=50&color=red&json=true`
    fetch(catImageUrl).then((response) => response.json()).then(data => {
      // console.log(data)
      const { url } = data
      setImageUrl(url)
    })
  }, [fact])

  return { imageUrl }
}
