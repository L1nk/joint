// Exercise 1 --------------------------------------------------------

var buf = new Buffer(100);
for(var i = 0; i < 100; i++) {
    buf[i] = i;
}
console.log(buf);
    
// Exercise 2 --------------------------------------------------------

var buf = new Buffer(100);
for(var i = 0; i < 100; i++) {
    buf[i] = i;
}
var slice = buf.slice(40,60);
console.log(slice);

// Exercise 3 --------------------------------------------------------

var buf = new Buffer(100);
for(var i = 0; i < 100; i++) {
    buf[i] = i;
}
var copy = new Buffer(20)
buf.copy(copy, 0, 40, 60); // copy into parameter 1 starting at parameter 2
                           // parameter 3 is the location of the start of the copy
                           // parameter 4 is the end of the content to copy
console.log(copy);
