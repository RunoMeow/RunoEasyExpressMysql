module.exports = {
    success: (data) => {
        return {
            data,
            code: 0,
            msg: '操作成功'
        }
    },
    fail: (data, msg) => {
        return {
            data,
            code: -9,
            msg: msg ? msg : ''
        }
    },
    error: (data) => {
        return {
            data,
            code: -99,
            msg: '操作失败'
        }
    }
}