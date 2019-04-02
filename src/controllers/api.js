/**
 * Created by 1002125 on 15. 7. 9..
 */
'use strict';
const DEBUG = require('debug')('api');
const ModelAPI = require('../models/api');

exports = module.exports = {
    list: function (request,h) {

        const id = request.params.id;
        const page = request.query.page;
        request.log('api params.id',id);
        request.log('userAgent',request.plugins.scooter.toJSON());
        return  { name : ['api1','api2','api3'], id, page };
    },
    root: function (request,h) {

        return h.view('index', { title: 'UzysHapiSkeleton' });
    },
    auth: function (request,h) {

        return h.view('authentication', { title: 'UzysHapiSkeleton Basic authentication' });
    }
};

//class ControllerAPI {
//
//    list(request,reply) {
//
//        const id = request.params.id;
//        const page = request.query.page;
//        request.log('api params.id :',id);
//
//        reply( { name : ['api1','api2','api3'], id, page } );
//    }
//    root(request,reply) {
//
//        reply.view('index', { title: 'UzysHapiSkeleton' });
//    }
//    auth(request,reply) {
//
//        reply.view('authentication', { title: 'UzysHapiSkeleton Basic authentication' });
//    }
//}
//
//exports = module.exports = new ControllerAPI();