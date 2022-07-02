export function random() {
  const width = Math.floor((Math.random() * (600 - 300)) + 300);
  const height = Math.floor((Math.random() * (600 - 300)) + 300);
  return { width, height };
}
