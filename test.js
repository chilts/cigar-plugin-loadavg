var test = require('tape');

var loadavg = require('./index.js');

test('Basic 1', function(t) {
    loadavg(function(err, res) {
        t.ok(!err, 'There is no error');
        t.ok(res.min1, 'min1 is there');
        t.ok(res.min5, 'min5 is there');
        t.ok(res.min15, 'min15 is there');
        t.end();
    });
});

test('Basic 2', function(t) {
    loadavg({}, function(err, res) {
        t.ok(!err, 'There is no error');
        t.ok(res.min1, 'min1 is there');
        t.ok(res.min5, 'min5 is there');
        t.ok(res.min15, 'min15 is there');
        t.end();
    });
});
