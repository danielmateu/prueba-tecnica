// @ts-check
import { test, expect } from '@playwright/test'
const LOCAL_HOST_URL = 'http://localhost:5173/'
const CAT_PREFIX_IMG_URL = 'https://cataas.com'

// La app muestro facts randoms y una imagen
// de un gato. El usuario puede refrescar el fact

test('app shows a random fact and a cat image', async ({ page }) => {
  await page.goto(LOCAL_HOST_URL)
  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc).toContain(CAT_PREFIX_IMG_URL)
  await expect(imageSrc?.startsWith(CAT_PREFIX_IMG_URL)).toBeTruthy()
})
