'use strict';
class Storage {
  constructor(array) {
    this.items = [...array];
  }
  getItems() {
    return this.items;
  }
  addItem(itemToAdd) {
    return this.items.push(itemToAdd);
  }
  removeItem(itemToRemove) {
    for (const item of this.items) {
      if (item === itemToRemove) {
        const index = this.items.indexOf(item);
        return this.items.splice(index, 1);
      }
    }
  }
}

const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор']);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
