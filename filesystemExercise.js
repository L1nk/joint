var fs = require('fs');

// Excercise 1

fs.stat('./filesystemExcercise.js', function(err, stats) {
    if(err) { 
        console.log(err.message); 
        return;
    } 
    console.log(stats);
});

// Excercise 2

fs.open('./filesystemExcercise.js', 'r', function(err, fd) {

    if(err) { throw err; }
    var readBuffer = new Buffer(5),
        readBytes = 0;
    
    (function readFile() {
        fs.read(fd, readBuffer, readBytes, readBuffer.length - readBytes, 10 + readBytes, function(err, bytesRead) {
            if(err) { throw err; }
            readBytes += bytesRead;
            if(readBytes == readBuffer.length) {
                console.log(readBuffer);
            } else {
                readIt();
            }
        });
    })();

});

// Excercise 3

fs.open('./a.txt', 'r', function(err, fd) {
    if(err) { throw err; }
    function partialRead (start, bufferSize, callback) {
        var buffer = new Buffer(bufferSize);
        var readBytes = 0;
        (function readSome() {
            fs.read(fd, buffer, readBytes, buffer.length - readBytes, start + readBytes, function(err, bytesRead) {
                if(err) { throw err; }
                readBytes += bytesRead;
                if(readBytes === buffer.length) {
                    callback(buffer);
                } else {
                    readSome();
                }
            });
        })();
    }
    partialRead(5, 4, function(buffer1) {
        console.log(buffer1);
        partialRead(10, 4, function(buffer2) {
            console.log(buffer2);
        });
    });
});
