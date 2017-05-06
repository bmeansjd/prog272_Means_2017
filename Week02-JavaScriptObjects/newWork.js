/**
 * Created by bcuser on 5/6/17.
 */
/**
 * Created by bcuser on 5/6/17.
 */



var person = {
    firstName: 'Brenda',
    lastName: 'Means',
    sayName:function() {
        console.log('Hello, I am ' + this.firstName + ' ' + this.lastName);
    }
};

person.sayName();

var  calculator= {
    operator01: '6',
    operator02: "5"

};
calculator.operator02 = person.lastName.length;

calculator.operator01 = person.firstName.length;



calculator.addName = function () {
    'use strict';
    return this.operator01 + this.operator02;
};

calculator.subName = function () {
    'use strict';
    return this.operator01 - this.operator02;
};


calculator.multiplyName=function () {
    'use strict';
    return this.operator01 * this.operator02;
}


console.log('operator01 =', calculator.operator01);
console.log('operator02 =', calculator.operator02);
console.log('Add: ', calculator.addName());
console.log('Subtract:', calculator.subName());
console.log('Multiply:', calculator.multiply());



/*





 // /divider
 // ('Calculator'); console.log('operator01 =', calculator.operator01); console.log('operator02 =', calculator.operator02); console.log('Add: ', calculator.addName()); console.log('Subtract:', calculator.subName()); console.log('Multiply:', calculator.multiply());



 calculator.operator01 = person.firstName.length;
 calculator.operator02 = person.lastName.length;
 calculator.multiply = function()
 { 'use strict'; return this.operator01 * this.operator02; };

 //divider('Calculator');

 console.log('operator01 =', calculator.operator01);
 console.log('operator02 =', calculator.operator02);
 console.log('Add: ', calculator.addName());
 console.log('Subtract:', calculator.subName());
 console.log('Multiply:', calculator.multiply());*/
