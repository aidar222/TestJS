// let obj1 = {
//     name: "Kamilla",
//     age: 20,
//     objfunc: {
//         name: "Kanat"
//     }
// }
// let obj2 = obj1; // obj2 = {...obj1}
// // obj2.objfunc.name = "Aibek"
// obj2.name = "Aibek"
// console.log(obj1);

//! Деструктуризация - это специальный синтаксис, который позволяет нам распаковать массив или объект в неколько перемннных.
//? Деструктуризация массива 
// Порядок обязателен

// const array = [100, 200, 300, 400, 500];
// let [a, b, c, d] = array;
// console.log(a, b, c, d);

// let array2 = ['John', 'Mike', 'Michael'];
// let [per1, per2, per3] = array2;
// console.log(per1);
 
//? Rest operator
// С помощью rest operator можно получить остаточные значения.

// const food = ['eggs', 'milk', 'bread', 'banana', 'kaimak'];
// let [item1, item2, ...other] = food;
// console.log(item1);
// console.log(item2);
// console.log(other);

// let num1 = 1;
// let num2 = 2;
// let temp = num1;
// num1 = num2;
// num2 = temp;
// console.log(num1, "num1");
// console.log(num2, "num2");

// let num1 = 1;
// let num2 = 2;
// [num1, num2] = [num2, num1]
// console.log(num1, 'num1');
// console.log(num2, 'num2');

// let artist = {
//     name: 'Adil',
//     lastName: 'Zhalelov',
//     position: 'Rapper'
// };
// let {name, lastName, position} = artist;
// console.log(name);
// console.log(lastName);
// console.log(position);

//? Перезаписываем ключи переменной
// let artist = {
//     name: 'Adil',
//     lastName: 'Zhalelov',
//     position: 'Rapper'
// };
// let {
//     name: hisName, 
//     lastName: hisLastName,
//     position: hisPosition
// } = artist;
// console.log(hisName, hisLastName, hisPosition);

//! Деструктуризация строки
// let strMain = "Makers Bootcamp";
// let [str1, str2] = strMain.split(" ");
// console.log(str1);
// console.log(str2);

//! spread (поверхностное копирование. Изменение копии не повлияют на оригинал)

// let array1 = ['hello', 'bye', 'good'];
// let array2 = ['Привет', ...array1, 'Пока'];
// console.log(array2);
// let array3 = [...array1];
// array3.push('Добавили новое значение');
// console.log(array3);
// console.log(array1);

//? Конкатинация 

// let arr1 = [20, 30];
// let arr2 = [40, 50];
// let newArray = arr1.concat(arr2);
// let newArray = [...arr1, ...arr2]
// console.log(newArray);

// let object1 = {name: "Nursultan", position: "programmer"};
// let object2 = {name: "Ilika", position: "champ"};
// let resObj = {...object1, ...object2};
// console.log(resObj);

//! JSON.parse() и JSON.stringify()

// const car1 = {
//     color: 'red',
//     name: 'Mersedes',
//     details: {model: 'kaban', year: 1996}
// };
// let car2 = {...car1};
// car2.color = 'black';
// car2.details.year = 1998;
// console.log(car2);
// console.log(car1);

//? JSON.stringify() преобразует переданный элемент в строку с форматом JSON. Затем JSON.parse () преобразует его обратно в объект JavaScript, это позволяет выполнять глубокое клонирование и для вложенных объектов, чего не происходит с оператором Spread.

// const car1 = {
//     color: 'red',
//     name: 'Mersedes',
//     details: {model: 'kaban', year: 1996},
//     sayHello(){
//         console.log('Не работает в глубоком копировании');
//     }
// };

// let car2 = JSON.parse(JSON.stringify(car1));
// car2.details.year = 1998
// console.log(car2);
// console.log(car1);

//! Вложенная деструктуризация
let person = {
    name: 'Jack',
    age: 19,
    favoriteFood: ['Lagman', 'Manty'],
    pet: {
      name: 'Sharik',
      age: 2,
    },
    study: {
      university: 'KSTU',
      subjects: ['Math', 'Literature'],
      location: {
        str: 'Manas str 66',
        city: 'Bishkek',
      },
    },
  };
  
  //todo get: lagman and manty, sharik, KSTU, Literature, Bishkek

  let {
    favoriteFood: [food1, food2],
    pet: { name: petName },
    study: {
      university,
      subjects: [, litra],
      location: { city, index = "0000" },
    },
  } = person;
  
  console.log( food1, food2, petName, university, litra, city, index);