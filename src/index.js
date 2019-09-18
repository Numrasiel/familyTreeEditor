//class definitions

function Person(name,surname) {
    this.name=name;
    this.surname=surname;
    parents = [];//person[] <=2//consider change to a set
    children = [];//person[]
    address=null;
    phone=null;
    this.addParent = function (parent) {
        if (parents.length <= 2) {
            parents.push(parent);
        }
    }
    this.addChild = function (children) {
        children.push(children);
    }
    /**Search trough the family to count all members */
    this.getFamilySize = function () {
        //TODO
    }

    this.getDescendantSize = function () {
        let count=children.length;
        children.array.forEach(element => count+=element.getDescendantSize());
        return count;
    }
}

function Address(line1,line2,city,country,postcode) {
    this.line1=line1;
    this.line2=line2;
    this.city=city;
    this.country=country;
    this.postcode=postcode;
    this.toString=function(){
        return line1+' , '+line2+' , '+city+' , '+country+' , '+postcode;
    }
}

function Phone(prefix,number) {
    this.prefix=prefix;
    this.number=number;
}
// program
let address1=new Address('Black Castle','1','Wall in the north','Westeross','NW53 ED');
let jhon=new Person('Jhon','Snow');
jhon.addres=address1;
jhon.phone=new Phone('+44','7564321');

let ben=new Person('Ben','Stark')
//class definitions

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.parents = new Set();//person[] <=2//consider change to a set
    this.children = new Set();//person[]
    this.address = null;
    this.phone = null;
    this.addParent = function(parent) {
      if (parents.length <= 2) {
        this.parents.add(parent);
      }
    }
    this.addChild = function(child) {
      this.children.add(child);
    }
    /**Search trough the family to count all members */
    this.getFamilySize = function() {
      //TODO
    }
  
    this.getDescendantSize = function() {
      let count = children.length;
      this.children.forEach(element => count += element.getDescendantSize());
      return count;
    }
  }
  
  function Address(line1, line2, city, country, postcode) {
    this.line1 = line1;
    this.line2 = line2;
    this.city = city;
    this.country = country;
    this.postcode = postcode;
    this.toString = function() {
      return this.line1 + ' , ' + this.line2 + ' , ' + this.city + ' , ' + this.country + ' , ' + this.postcode;
    }
  }
  
  function Phone(prefix, number) {
    this.prefix = prefix;
    this.number = number;
  }
  // program
  let address1 = new Address('Black Castle', '1', 'Wall in the north', 'Westeross', 'NW53 ED');
  let jhon = new Person('Jhon', 'Snow');
  jhon.address = address1;
  jhon.phone = new Phone('+44', '7564321');
  
  let ben = new Person('Ben', 'Stark')
  
  ben.addChild(jhon);
  console.log(jhon);
  console.log(ben);
  console.log(jhon.address.toString());
  console.log('Ben has adescendant size of:' + ben.getDescendantSize());
  
ben.addChild(jhon);
console.log(jhon);
console.log(ben);
console.log(jhon.address.toString());
console.log ('Ben has adescendant size of:' + ben.getDescendantSize());
