/* eslint-disable react/jsx-indent */
import React, { useEffect, useState } from 'react'
import './App.css'

const CAT_RANDOM_ENDPOINT_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
const CAT_PREFIX_IMG_URL = 'https://cataas.com'

export const App = () => {
  const [fact, setCatFact] = useState('Lorem ipsum cat fact')
  const [imageUrl, setImageUrl] = useState()
  // Efecto para obtener el fact al cargar la pagina
  useEffect(() => {
    // const getCatFact = async () => {
    //   const response = await fetch(CAT_RANDOM_ENDPOINT_FACT)
    //   const data = await response.json()
    //   setCatFact(data.fact)
    // }
    // getCatFact()
    fetch(CAT_RANDOM_ENDPOINT_FACT)
      .then(response => response.json())
      // TODO: Handle error if !response.ok
    // Si no hay respuesta, lanzar nuevo error
      .catch(error => {
        throw new Error(error)
      })
      .then(data => {
        const { fact } = data
        setCatFact(fact)
        // First word
        // const firstTrheeWords = fact.split(' ', 3).join(' ')
        // // console.log(firstTrheeWords)
        // const catImageUrl = `https://cataas.com/cat/says/${firstTrheeWords}?size=50&color=red&json=true`

        // fetch(catImageUrl)
        //   .then((response) => response.json())
        //   .then(data => {
        //     // console.log(data)
        //     const { url } = data
        //     setImageUrl(url)
        //   })
      })
  }, [])

  // Efecto para recuperar la imagen cada vez que tenemos una cita nueva
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

  return (
        <main>
            <h1>Random Cat Fact</h1>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={`${CAT_PREFIX_IMG_URL}${imageUrl}`} alt={`Imagen extraida de las primeras tres letras de ${fact}`} />}
        </main>
  )
}
