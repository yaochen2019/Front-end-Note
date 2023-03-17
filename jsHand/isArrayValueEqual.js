var a = ['1', '3', '2'];
var b = ['3', '1', '2'];
 
var c = a.length === b.length && a.filter(t => !b.includes(t));
 
console.log(c.length === 0); // true