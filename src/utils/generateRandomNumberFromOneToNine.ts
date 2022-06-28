export function generateRandomNumberFromOneToNine(minimum = 1, maximum = 9) {
  const min = Math.ceil(minimum);
  const max = Math.floor(maximum);
  const randomNumberBetweenOneAndNine = Math.floor(Math.random() * (max - min)) + min;

  return randomNumberBetweenOneAndNine;
}