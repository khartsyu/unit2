export default function sortHeroes(heroes) {
  if (!Array.isArray(heroes)) {
    throw new Error('Input must be an array');
  }

  return [...heroes].sort((firstHero, secondHero) => secondHero.health - firstHero.health);
}