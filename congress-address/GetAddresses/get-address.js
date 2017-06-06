/**
 * Created by bcuser on 5/22/17.
 */
var fs=require("fs");
var debug = require('debug')('git-convert');

debug('Testing debug');

function readFile(fileName, callback) {
    'use strict';
    if (!callback) {
        return new Promise(function(resolve, reject) {
            fs.readFile(fileName, 'utf8', function(err, fileContents) {
                if (err) {
                    reject(err);
                }
                resolve({
                    'result': fileContents
                });
            });
        });
    } else {
        fs.readFile(fileName, 'utf8', function(err, fileContents) {
            if (err) {
                throw (err);
            }
            callback({
                'result': fileContents
            });
        });
    }
}



// console.log('{');  <=== COMMENT IT OUT AND REPLACE IT WITH THESE TWO LINES
const open = (i === 0) ? '[\n\t{' : '\t{';
console.log(open);

// PUT DOUBLE QUOTES AROUND YOUR PROPERTY NAMES
writeIt("firstName", json.objects[i].person.firstname);

// AND SO ON

// console.log('},'); <=== COMMENT IT OUT AND REPLACE IT WITH THESE TWO LINES
const close = i < jsonLength - 1 ? '\t},' : '\t}\n]';
console.log(close);


function getAddress(value, char) {
    'use strict';
    return value.substring(0, value.lastIndexOf(char) -1);
}

function getZip(value, char) {
    'use strict';
    return value.substring(value.lastIndexOf(char).vlue.length);
}

function getCity(value, char, len) {
    'use strict';
    var start = value.lastIndexOf(char);
    return value.substring(start, start + len);
}

function writeIt(label, value, noComma) {
    var comma = noComma ? ' " ' : ' ",';
    console.log('\t\t' + label,' " ' + value + comma)
};

readFile('address.json').then(function(text) {
    //debug(text);
    var json = JSON.parse(text.result);

    //debug('\n\nSTRINGIFY\n\n', JSON.stringify(json));
   // var gitUser = [];
    const unknown = 'unknown';
    const jsonLength = json.objects.length;
    for (var i = 0; i < json.objects.length; i++) {
        console.log(open);
        writeIt('firstName:', json.objects[i].person.firstname);
        writeIt('lastName:', json.objects[i].person.lastname);
        writeIt('street:', getAddress(json.objects[i].extra.address, 'W'));
        writeIt('city:', getCity(json.objects[i].extra.address, 'W'));
        writeIt('state:', (json.objects[i].state));
        writeIt('zip:', (json.objects[i].zip));
        writeIt('phone:', (json.objects[i].phone));
        writeIt('website:', (json.objects[i].website));
        writeIt('email:', '');
        writeIt('contact:', json.objects[i].extra.contact_form || '', true);
        console.log('},');
    }
    //console.log('\n\nSTRINGIFY\n\n', JSON.stringify(gitUser, null, 4));
    debug('all done');
});
