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

// 3 завдання
const cardToRemove = "Карточка-3";

const indexOfCardToRemove = cards.indexOf(cardToRemove);
cards.splice(indexOfCardToRemove, 1);

console.log(cards);

// 4 завдання
const CardToInsert = "Карточка-6";

const indexOfCardToInsert = cards.indexOf(cards[cards.length - 1]);
cards.splice(indexOfCardToInsert + 1, 0, CardToInsert);

console.log(cards);

// 5 завдання
const CardToUpdate = "Карточка-4";
const newValue = "Оновлена карточка-4";

const indexOfCardToUpdate = cards.indexOf(CardToUpdate);

cards.splice(indexOfCardToUpdate, 1, newValue);

console.log(cards);
