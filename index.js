const loader = require('uniswap-v2-loader')
const dump = require('path').join(__dirname, 'dump')

module.exports.load = (params = {}) => loader.load({
    factory: '0x1097053fd2ea711dad45caccc45eff7548fcb362',
    filename: dump,
    csv: false,
    ...params
})

module.exports.subscribe = (callback, params = {}) => loader.subscribe(
    callback,
    {
        factory: '0x1097053fd2ea711dad45caccc45eff7548fcb362',
        filename: dump,
        csv: false,
        ...params
    }
)