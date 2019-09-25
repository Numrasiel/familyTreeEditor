const {Person,Phone,Address} = require('./model')

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