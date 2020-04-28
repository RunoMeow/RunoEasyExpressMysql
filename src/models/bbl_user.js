const tableName = 'bbl_user'
const dbConn = require('../plugins/dbConn')
const querySync = require('../plugins/querySync')(dbConn)
const dbUtil = require('../plugins/dbUtil')(dbConn)(tableName)

module.exports = {
    ...dbUtil,
    getLastUserNickName: async () => {
        const result = await querySync(`SELECT nickname FROM ${tableName} ORDER BY create_time DESC LIMIT 1`)
        if (!result.length) return null 
        return result.pop()['nickname']
    }
}