let myString = 'AbCdEfgéèç_éèkIGJFki';
let my1stRegEx = /[a-z]{7}/ig;
let my2ndRegEx = new RegExp(/[a-z]/, 'ig');
let my3rdRegEx = new RegExp(/[a-z]/, 'i', 'g');
let my4thRegEx = new RegExp(/[a-z]/, 'i');

let matches1 = myString.match(my1stRegEx);
let matches2 = myString.match(my2ndRegEx);
let matches3 = myString.match(my3rdRegEx);
let matches4 = myString.match(my4thRegEx);

let replace1 = myString.replace(my1stRegEx, "|Ii");
let replace2 = myString.replace(my2ndRegEx, "|Ii");
let replace3 = myString.replace(my3rdRegEx, "|Ii");
let replace4 = myString.replace(my4thRegEx, "|Ii");

let test1 = my1stRegEx.test(myString);
let test2 = my3rdRegEx.test(myString);
let test3 = my2ndRegEx.test(myString);
let test4 = my4thRegEx.test(myString);

console.log('matches')
console.log(matches1);
console.log(matches2);
console.log(matches3);
console.log(matches4);

console.log('')
console.log('replaces')
console.log(replace1);
console.log(replace2);
console.log(replace3);
console.log(replace4);

console.log('')
console.log('tests')
console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);

// conclusion for this part

// in literal notation it is possible to use multiple flags
// syntax see above

// in constructor mode, writing flags separately will result
// in only the first flag be taken into consideration
// see my3rdRegEx and my4thRegEx

// Can't explain the results of my2ndRegEx yet
// seems this syntax treat every char separately though

// but all these syntaxes will be proceeded without error

// note how replace and match are string method
// and that test is a regEx method






