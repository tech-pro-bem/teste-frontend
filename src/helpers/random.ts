export function random() {
  const catNumber = ((Math.random() * (16 - 0)) + 0).toFixed(0);
  return { catNumber };
}
