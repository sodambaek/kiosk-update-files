'use strict';
const controllerName = 'otaFiles';
const modelOtaFiles = require(`../models/${controllerName}`);
const _             = require('lodash');

const internals = {};

internals.otaFilePosts = async function ( request, h ) {
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

internals.otaFilePost = async function ( request, h ) {
    let resp = {};
    const id = request.params.id;

    try {
        let data;
        data = await modelOtaFiles.findById(id);
        _.extend( resp, data);

        return h.response(resp);
    } catch ( e ) {
        console.log('ERROR', resp, e);
    }
}

internals.createPost = async function (request, h) {
    const data = request.query;
    try{

        let resp = await modelOtaFiles.createPost(data);
        console.log(resp);

        return h.response(resp).code(201);
    } catch ( e ) {

    }
}

internals.deletePost = async function (request, h) {
    const id = request.params.id;

    try {
        // success: resp=1, not exist: resp=0
        let resp = await modelOtaFiles.deleteById(id);

        return h.response(resp).code(204);
    } catch ( e ) {

    }
}

internals.updatePost = async function (request, h) {
    const id = request.params.id;
    const data = request.query;

    try{
        let resp = await modelOtaFiles.updateById(id, data);

        return resp;

    } catch ( e ) {

    }


}

exports = module.exports = internals;