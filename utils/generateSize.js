const SIZES = [300, 400, 500, 600]

export function generateSize() {
  const height = SIZES[Math.floor(Math.random() * SIZES.length)]

  const numbersReversed = SIZES.reverse()
  const width =
    numbersReversed[Math.floor(Math.random() * numbersReversed.length)]

  return {
    width,
    height
  }
}
