import { useEffect, useState } from 'react'
import { getRandomFact } from '../servicies/facts'

export const useCatFact = () => {
  const [fact, setCatFact] = useState()
  // Efecto para obtener el fact al cargar la pagina
  const refreshFact = () => {
    getRandomFact().then(newFact => setCatFact(newFact))
  }
  useEffect(refreshFact, [])
  return { fact, refreshFact }
}
