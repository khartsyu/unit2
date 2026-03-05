import sortHeroes from '../sortHeroes.js';

describe('sortHeroes function', () => {
  const heroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const sortedHeroes = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  test('sorts heroes by health in descending order', () => {
    const result = sortHeroes(heroes);

    expect(result).toEqual(sortedHeroes);

  });

  test('original array remains unchanged (immutability)', () => {
    const originalCopy = [...heroes];
    sortHeroes(heroes);

    expect(heroes).toEqual(originalCopy);

    expect(heroes).not.toBe(originalCopy);
  });

  test('returns new array, not reference to original', () => {
    const result = sortHeroes(heroes);

    expect(result).not.toBe(heroes);

    expect(heroes).toEqual([
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ]);
  });

  test('handles empty array', () => {
    const result = sortHeroes([]);
    expect(result).toEqual([]);
    expect(result).not.toBe([]);
  });

  test('handles array with one hero', () => {
    const singleHero = [{ name: 'маг', health: 100 }];
    const result = sortHeroes(singleHero);

    expect(result).toEqual(singleHero);
    expect(result).not.toBe(singleHero);
  });

  test('handles heroes with same health', () => {
    const heroesWithSameHealth = [
      { name: 'воин', health: 50 },
      { name: 'маг', health: 50 },
      { name: 'лучник', health: 50 },
    ];

    const result = sortHeroes(heroesWithSameHealth);

    expect(result).toHaveLength(3);
    expect(result).toEqual(expect.arrayContaining(heroesWithSameHealth));
  });

  test('throws error if input is not an array', () => {

    expect(() => sortHeroes(null)).toThrow('Input must be an array');
    expect(() => sortHeroes({})).toThrow('Input must be an array');
    expect(() => sortHeroes('not array')).toThrow('Input must be an array');
  });
});