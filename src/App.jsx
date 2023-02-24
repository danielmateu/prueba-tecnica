/* eslint-disable react/jsx-indent */
import React, { useEffect, useState } from 'react'
import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { getRandomFact } from './servicies/facts'

export const CAT_RANDOM_ENDPOINT_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
const CAT_PREFIX_IMG_URL = 'https://cataas.com'

// function useCatImage ({ fact }) {
//   const [imageUrl, setImageUrl] = useState()

//   useEffect(() => {
//     if (!fact) return
//     const firstTrheeWords = fact.split(' ', 3).join(' ')
//     // console.log(firstTrheeWords)
//     const catImageUrl = `https://cataas.com/cat/says/${firstTrheeWords}?size=50&color=red&json=true`
//     fetch(catImageUrl).then((response) => response.json()).then(data => {
//       // console.log(data)
//       const { url } = data
//       setImageUrl(url)
//     })
//   }, [fact])

//   return { imageUrl }
// }

export const App = () => {
  const [fact, setCatFact] = useState('Lorem ipsum cat fact')
  const { imageUrl } = useCatImage({ fact })
  // Efecto para obtener el fact al cargar la pagina
  useEffect(() => {
    getRandomFact().then(setCatFact)
  }, [])
  // Efecto para recuperar la imagen cada vez que tenemos una cita nueva
  const handleClick = async () => {
    const newFact = await getRandomFact()
    setCatFact(newFact)
  }

  return (
        <main>
            <h1>Random Cat Fact</h1>
            <button onClick={handleClick}>Get new Cat</button>
            <section>
                {fact && <p>{fact}</p>}
                {imageUrl && <img src={`${CAT_PREFIX_IMG_URL}${imageUrl}`} alt={`Imagen extraida de las primeras tres letras de ${fact}`} />}
            </section>
        </main>
  )
}
