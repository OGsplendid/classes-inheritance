import Character from '../Character';

test('should throw error', () => {
  expect(() => {
    const hero = new Character('x');
  }).toThrow('Inappropriate name length(must contain 2 to 10 symbols');
});

test('should throw error', () => {
  expect(() => {
    const hero = new Character('Boo');
    hero.type = 'Dwarf';
  }).toThrow('Inappropriate type (must be Bowman, Daemon, Magician, Swordsman, Undead or Zombie');
});

test('shold return hero\'s name', () => {
  const hero = new Character('Boo', 'Bowman', 10, 10);
  expect(hero.name).toBe('Boo');
});

test('shold return hero\'s type', () => {
  const hero = new Character('Boo', 'Bowman', 10, 10);
  expect(hero.type).toBe('Bowman');
});
