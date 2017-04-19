var person = {
firstName: 'Brenda',
lastName: 'Means',
sayName:function() {
console.log('Hello, I am ' + this.firstName + ' ' + this.lastName);
}
};

person.sayName();

var operator;
operator = {
    operator01: '6',
    operator02: '5',
    addName: function () {
        'use strict';
        return this.operator02 + this.operator02;
    },

    subName: function () {
        return this.operator01 - this.operator02;
    },


    multiplyName: function () {
        return this.operator01 * this.operator02;
    }
};
