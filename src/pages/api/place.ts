import type { NextApiRequest, NextApiResponse } from 'next'

import { generateRandomNumber } from '../../utils/generateRandomNumber'
import { Animal } from '../../types'

const SERVICES_URLS = {
  [Animal.Cat]: 'https://placekitten.com',
  [Animal.Dog]: 'https://placedog.net'
}
const MAX_IMAGE_SIDE_SIZE = 1000

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const animal = req.query.service as `${Animal}`
  const url = SERVICES_URLS[animal]
  const width = generateRandomNumber(MAX_IMAGE_SIDE_SIZE)
  const height = generateRandomNumber(MAX_IMAGE_SIDE_SIZE)

  const result = await fetch(`${url}/${width}/${height}`)
  const image = await result.blob()
  const buffer = await image.arrayBuffer()

  res.setHeader('Content-Type', image.type)
  res.send(Buffer.from(buffer))
}
