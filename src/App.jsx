/* eslint-disable react/jsx-indent */
// import React, { useEffect, useState } from 'react'
import './App.css'
import { Otro } from './components/Otro'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'

export const CAT_RANDOM_ENDPOINT_FACT = 'https://catfact.ninja/fact'

export const App = () => {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })
  const handleClick = async () => {
    refreshFact()
  }

  return (
        <main>
            <h1>Random Cat Fact</h1>
            <button onClick={handleClick}>Get new Cat</button>
            <section>
                {fact && <p>{fact}</p>}
                {imageUrl && <img src={imageUrl} alt={`Imagen extraida de las primeras tres letras de ${fact}`} />}

                <Otro />
            </section>
        </main>
  )
}
