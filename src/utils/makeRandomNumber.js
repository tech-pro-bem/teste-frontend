const makeRandomNumber = () => {
  const MAX_NUMBER = 300;
  const MIN_NUMBER = 200;
  const RANDOM_NUMBER = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER)
  + MIN_NUMBER);
  return RANDOM_NUMBER;
};

export default makeRandomNumber;
