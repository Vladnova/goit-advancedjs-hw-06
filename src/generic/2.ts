/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

type BasicTop = Pick<AllType, 'name' | 'color'>;
type BasicBottom = Pick<AllType, 'position' | 'weight'>;

function compare(top:BasicTop, bottom:BasicBottom): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}

compare({name:'test', color:'red'}, {position: 2, weight:200})

export {};

