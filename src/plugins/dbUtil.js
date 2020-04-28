module.exports = (dbConn) => (tableName) => {
    const querySync = require('../plugins/querySync')(dbConn)
    return {
        getAll: async (field) => (await querySync(`SELECT ${field ? '(' + field.join(',') + ')' : '*'} FROM ${tableName}`)),
        getCount: async (field) => {
            const result = await querySync(`SELECT count(${field ? field : '*'}) FROM ${tableName}`)
            return result[0][Object.keys(result[0])[0]]
        }
    }
}