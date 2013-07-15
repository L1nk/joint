var EventEmitter = require('events').EventEmitter,
    util         = require('util');

var Ticker = function(tickerInterval) {
    var self = this;
    var tickerIntervalMillis = tickerInterval * 1000;
    setInterval(function() {
        self.emit('tick');
    }, tickerIntervalMillis);
}

util.inherits(Ticker, EventEmitter)

var ticker = new Ticker(1);
ticker.on('tick', function() {
    console.log('TICK');
});

