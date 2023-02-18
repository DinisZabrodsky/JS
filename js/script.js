class Car {
  static carInfo (obj) {
    console.log('this is obj -> ', obj)
  }

  constructor ({name, value}) {
    this._name = name;
    this._value = value;
  }
  get name () {
    return this._name;
  }
  set name (newName) {
    this._name = newName;
  }

  chengeValue (newValue) {
    this._value = newValue;
  }

  changeName (newName_) {
    this._name = newName;
  }
}



const audi = new Car({
  name: 'Audi',
  value: 5000,
})

console.log(audi);
audi.chengeValue(3000);
console.log(audi);

Car.carInfo(audi)

console.log(audi.name);
audi.name = 'Audiiiiii';
console.log(audi.name);