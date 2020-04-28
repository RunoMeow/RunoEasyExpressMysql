const bbl_user = require('../../models/bbl_user')
const resFormat = require('../../plugins/resFormat')

module.exports = async (req, res) => {
    try {
        res.json(resFormat.success({
            datas: await bbl_user.getAll(),
            count: await bbl_user.getCount(),
            phoneIsNotNullCount: await bbl_user.getCount('phone'),
            lastUserNickName: await bbl_user.getLastUserNickName()
        }))
    } catch (error) {
        if (error.errno === 1054) return res.json(resFormat.fail(error, '需显示的列不存在'))
        console.error(error)
        res.json(resFormat.error(error))
    }
}