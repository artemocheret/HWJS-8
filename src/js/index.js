// 1 завдання
const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let string = "";

for (let i = 0; i < friends.length; i++) {
  string += friends[i];
  if (i < friends.length - 1) {
    string += ", ";
  }
}
console.log(string);

string = friends.join(", ");

console.log(string);

// 2 завдання
const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];

cards.splice(2, 1);

// 3 завдання
cards.splice(5, 0, "Карточка-6");

// 4 завдання
cards.splice(2, 1, "Карточка-7");

console.log(cards);
