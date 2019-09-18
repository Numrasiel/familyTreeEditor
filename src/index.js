//class definitions

var Person = class {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
    this.parents = new Set();// <=2
    this.children = new Set();
    this.address = null;
    this.phone = null;
  }

  addParent (parent) {
    if (parents.length <= 2) {
      this.parents.add(parent);
    }
  };
  addChild (child) {
    this.children.add(child);
  };
  /**Search trough the family to count all members */
  getFamilySize () {
    //TODO
  };

  getDescendantSize () {
    let count = this.children.size;
    this.children.forEach(element => count += element.getDescendantSize());
    return count;
  };
  greet () {
    return 'I am ' + this.name + ' ' + this.surname;
  }
}

var Address = class {
  constructor(line1, line2, city, country, postcode) {
    this.line1 = line1;
    this.line2 = line2;
    this.city = city;
    this.country = country;
    this.postcode = postcode;
  }
  toString () {
    return this.line1 + ' , ' + this.line2 + ' , ' + this.city + ' , ' + this.country + ' , ' + this.postcode;
  };
}

var Phone = class {
  constructor(prefix, number) {
    this.prefix = prefix;
    this.number = number;
  }
}

// program
let address1 = new Address('Black Castle', '1', 'Wall in the north', 'Westeross', 'NW53 ED');
let jhon = new Person('Jhon', 'Snow');
jhon.address = address1;
jhon.phone = new Phone('+44', '7564321');
let liliana = new Person('Liliana', 'Targaryen');

let ben = new Person('Ben', 'Stark')

ben.addChild(jhon);
jhon.addChild(liliana);
console.log(jhon);
console.log(ben);
console.log(jhon.address.toString());
console.log(ben.greet());
console.log('Ben has a descendant size of:' + ben.getDescendantSize());