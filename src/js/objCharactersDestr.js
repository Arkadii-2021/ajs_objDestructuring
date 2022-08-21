export const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
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
  ],
};

export function specAttack(objCharacter) {
  const specialAttack = [];
  const { special } = objCharacter;
  for (const prop of special) {
    if (!prop.hasOwnProperty('description')) {
      prop.description = 'Описание не доступно';
    }
    const {
      id, name, icon, description,
    } = prop;
    specialAttack.push({
      id, name, icon, description,
    });
  }
  return specialAttack;
}
