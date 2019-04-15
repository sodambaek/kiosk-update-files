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
            await this.knex(this.tableName).insert(post);
            return {success: true, message: 'ok'};

        } catch(e) {
            console.log("Error occured: ", e);
        }
    }

    async deleteById(id) {
        const resp = await this.knex(this.tableName)
            .where('id', id)
            .del();

        return resp;
    }

}

module.exports = new otaFiles('otaFiles', Config.mysql);