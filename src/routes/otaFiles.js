'use strict';
const filesController = require('../controllers/otaFiles');
const ApiValidate = require('../validations/api');

module.exports = function () {

    return [
        {
            method: 'GET',
            path: '/otaFiles',
            config: {
                description: 'ota update file post list',
                notes: 'OTA 업데이트 파일 게시글 리스트',
                tags: ['api', 'files'],
                handler: filesController.otaFiles,
                // validate: ApiValidate.otaFiles
            }
        },
        {
            method: 'GET',
            path: '/otaFiles/{id}',
            config: {
                description: 'ota update file post',
                notes: 'OTA 업데이트 파일 게시글',
                tags: ['api', 'post'],
                handler: filesController.post,
                // validate:
            }
        },
        {
            method: 'POST',
            path: '/otaFiles',
            config: {
                description: 'create ota update file post',
                notes: 'OTA 업데이트 파일 게시글 생성',
                tags: ['api', 'create'],
                handler: filesController.create,
                // validate:
            }
        }
    ];
}();