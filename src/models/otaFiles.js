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

}

module.exports = new otaFiles('otaFiles', Config.mysql);