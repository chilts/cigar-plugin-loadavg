// ----------------------------------------------------------------------------
//
// cigar-plugin-loadavg
//
// Copyright 2013 Andrew Chilton. All Rights Reserved.
//
// License: MIT
//
// ----------------------------------------------------------------------------

// core
var fs = require('fs');

// ----------------------------------------------------------------------------

module.exports = function(opts, callback) {
    if ( typeof opts === 'function' ) {
        callback = opts;
        opts = {};
    }
    fs.readFile('/proc/loadavg', 'utf8', function(err, data) {
        if (err) return callback(err);
        var lines = data.split("\n");
        var fields = lines[0].split(/\s+/);
        callback(null, {
            min1 : parseFloat(fields[0]),
            min5 : parseFloat(fields[1]),
            min15 : parseFloat(fields[2]),
        });
    });
};

// ----------------------------------------------------------------------------
