import type { NextApiRequest, NextApiResponse } from 'next'

import { generateRandomNumber } from '../../utils/generateRandomNumber'

const SERVICES_URLS = {
  cat: 'https://placekitten.com',
  dog: 'https://placedog.net'
}
const MAX_IMAGE_SIDE_SIZE = 1000

type ServiceQuery = keyof typeof SERVICES_URLS

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const type = req.query.service as ServiceQuery
  const url = SERVICES_URLS[type]
  const width = generateRandomNumber(MAX_IMAGE_SIDE_SIZE)
  const height = generateRandomNumber(MAX_IMAGE_SIDE_SIZE)

  const result = await fetch(`${url}/${width}/${height}`)
  const image = await result.blob()
  const buffer = await image.arrayBuffer()

  res.setHeader('Content-Type', image.type)
  res.send(Buffer.from(buffer))
}
