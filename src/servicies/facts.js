import { CAT_RANDOM_ENDPOINT_FACT } from '../App'

export const getRandomFact = async () => {
  const response = await fetch(CAT_RANDOM_ENDPOINT_FACT)
  const data = await response.json()
  const { fact } = data
  return fact
}
