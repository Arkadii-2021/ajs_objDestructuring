import {
  character, specAttack,
} from '../objCharactersDestr';

const arrCheck = [
  {
    id: 8,
    name: 'Двойной выстрел',
    icon: 'http://...',
    description: 'Двойной выстрел наносит двойной урон',
  },
  {
    id: 9,
    name: 'Нокаутирующий удар',
    icon: 'http://...',
    description: 'Описание не доступно',
  },
];

test('check function specAttack', () => {
  const checkProps = specAttack(character);
  expect(checkProps).toEqual(arrCheck);
});
