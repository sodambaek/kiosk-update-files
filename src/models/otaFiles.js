const UzysDB    = require('../helpers/UzysDB');
const Config    = require('../../config');


class otaFiles extends UzysDB {

    constructor(tableName, option) {
        super(tableName, option);
    }

    async fetch() {

        const rows = await this.knex(this.tableName).select();

        console.log(rows);
        return rows;
    }

    async findById(id) {
        const rows = await this.knex(this.tableName)
            .select()
            .where('id', id);

        console.log(rows);
        return rows;
    }

    async createPost(post) {
        // let data = {title: '타이틀', author: '작성자', url: 'http://www.hello.com', content: '내용 내용 내용'};

        try {
            this.knex(this.tableName).insert(post)
                .then( function (result) {
                    // TODO: should not return like this at async function
                    return {success: true, message: 'ok'};
                })
        } catch(e) {
            console.log("Error occured: ", e);
        }
    }

}

module.exports = new otaFiles('otaFiles', Config.mysql);