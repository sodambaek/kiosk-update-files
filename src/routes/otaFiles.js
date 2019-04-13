'use strict';
const filesController = require('../controllers/otaFiles');
const ApiValidate = require('../validations/api');

module.exports = function () {

    return [
        {
            method: 'GET',
            path: '/otaFiles',
            config: {
                description: 'ota update file list',
                notes: 'OTA 업데이트 파일 리스트',
                tags: ['api', 'files'],
                handler: filesController.otaFiles,
                // validate: ApiValidate.otaFiles
            }
        }
    ];
}();