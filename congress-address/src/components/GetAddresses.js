/**
 * Created by bcuser on 5/10/17.
 */
var fs=require("fs");
var debug = require('debug')('get-address');

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
const open = (i === 0) ? '[\n\t{' : '\t{';
console.log(open);

writeIt('"firstName":', json.objects[i].person.firstname);
writeIt('"lastName":', json.objects[i].person.lastname);
// AND SO ON

const close = i < jsonLength - 1 ? '\t},' : '\t}\n]';
console.log(close);



function getAddress(value, char) {
    'use strict';
    return value.substring(0, value.lastIndexOf(char) -1);
}

function getZip(value, char) {
    'use strict';
    // YOU WRITE IT
    // ITS THE SAME SINGLE CALL AS GET ADDRESS, BUT INDEXES ARE DIFFERENT
    // UNCOMMENT NEXT LINE AND MODIFY IT
    // return value.substring(WHAT GOES HERE?, WHAT GOES HERE?);
}

function getCity(value, char, len) {
    'use strict';
    var start = value.lastIndexOf(char);
    return value.substring(start, start + len);
}

function writeIt(label, value, noComma) {
    var comma = noComma ? '"' : '",';
    console.log('\t' + label, '"'+ value + comma)
};

readFile('address.json').then(function(text) {
    debug(text);
    var json = JSON.parse(text.result);
    debug('\n\nSTRINGIFY\n\n', JSON.stringify(json));
    var gitUser = [];
    const unknown = 'unknown';
    for (var i = 0; i < json.objects.length; i++) {
        console.log('{');
        writeIt('firstName:', json.objects[i].person.firstname);
        writeIt('firstName:', json.objects[i].person.lastname);
        writeIt('street:', getAddress(json.objects[i].extra.address, 'W'));
        writeIt('city:', getAddress(json.objects[i].extra.address));
        writeIt('zip:', getAddress(json.objects[i].extra.address));
        writeIt('phone:', getAddress(json.objects[i].extra.address));
        writeIt('website:', getAddress(json.objects[i].extra.address));
        writeIt('email:', '');
        writeIt('contact:', json.objects[i].extra.contact_form || '', true);
        console.log('},');
    }
    //console.log('\n\nSTRINGIFY\n\n', JSON.stringify(gitUser, null, 4));
    debug('all done');
});