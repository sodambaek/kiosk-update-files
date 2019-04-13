'use strict';
const controllerName = 'otaFiles';
const modelOtaFiles = require(`../models/${controllerName}`);
const _             = require('lodash');

const internals = {};

internals.otaFiles = async function ( request, h ) {

    let resp = {};

    try {
        let data;
        data = await modelOtaFiles.fetch();
        _.extend( resp, data);

        return h.response(resp);
    } catch ( e ) {
        console.log('ERROR', resp, e);
    }

}

exports = module.exports = internals;