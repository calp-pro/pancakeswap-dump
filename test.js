const { describe, before, it } = require('node:test')
const assert = require('node:assert/strict')
const {load} = require('./index')

describe('pancakeswap-v2-dump', () => {

    it('Find pair addresses WBTC/WETH', () =>
        load().then(pairs =>
            assert.ok(
                pairs.some(_ =>
                    _.pair == '0x4ab6702b3ed3877e9b1f203f90cbef13d663b0e8' &&
                    _.token0 == '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599' &&
                    _.token1 == '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
                )
            )
        )
    )

})
