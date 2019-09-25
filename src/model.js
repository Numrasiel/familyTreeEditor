//class definitions
class Person {
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

class Address{
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

class Phone{
  constructor(prefix, number) {
    this.prefix = prefix;
    this.number = number;
  }
}

module.exports={
    Person,Address,Phone
    }