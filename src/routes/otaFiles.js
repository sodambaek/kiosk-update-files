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
                handler: filesController.otaFilePosts,
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
                handler: filesController.otaFilePost,
                // validate:
            }
        },
        {
            method: 'POST',
            path: '/otaFiles',
            config: {
                description: 'create ota update file post',
                notes: 'OTA 업데이트 파일 게시글 생성',
                tags: ['api', 'createPost'],
                handler: filesController.createPost,
                // validate:
            }
        },
        {
            method: 'DELETE',
            path: '/otaFiles/{id}',
            config: {
                description: 'delete ota update file post',
                notes: 'OTA 업데이트 파일 게시글 삭제',
                tags: ['api', 'deletePost'],
                handler: filesController.deletePost,
                // validate:
            }
        },
        {
            method: 'PUT',
            path: '/otaFiles/{id}',
            config: {
                description: 'update ota update file post',
                notes: 'OTA 업데이트 파일 게시글 삭제',
                tags: ['api', 'updatePost'],
                handler: filesController.updatePost,
                // validate:
            }
        }
    ];
}();