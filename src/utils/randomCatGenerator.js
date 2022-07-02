export const randomCatGenerator = (min, max) => {
  const random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;
};
