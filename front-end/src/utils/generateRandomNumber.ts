export function generateRandomNumber() {
  const numberMin = 200
  const numberMax = 600
  
  return Math.floor(Math.random() * (numberMax - numberMin)) + numberMin

}