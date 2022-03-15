'use strict';
module.exports = (body, secret, cb) => {
    console.log('inside jwtDecoder');
    if (!body) {
        return cb(new Error('invalid jwt data'));
    }

    require('jsonwebtoken').verify(body.toString('utf8'), secret, { algorithm: 'HS256' }, cb);
};
