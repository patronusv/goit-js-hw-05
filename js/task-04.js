'use strict';
class StringBuilder {
  constructor(string) {
    this._value = string;
  }
  get value() {
    return this._value;
  }
  append(str) {
    return (this._value += str);
  }
  prepend(str) {
    return (this._value = str + this._value);
  }
  pad(str) {
    this.prepend(str);
    this.append(str);
  }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
