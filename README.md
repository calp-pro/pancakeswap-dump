# <picture><source media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/npm/uniswap-v2-loader@5.0.1/logo-dark.svg"><img alt="calp.pro icon" src="https://cdn.jsdelivr.net/npm/uniswap-v2-loader@5.0.1/logo-light.svg" height="32" align="absmiddle"></picture>&nbsp;&nbsp;pancakeswap-dump

<br>

Static set of addresses (PancakeSwap Ethereum mainnet).<br>
New pairs updates happen **every hour** at GitHub Action [update.yml](https://github.com/calp-pro/pancakeswap-dump/actions/workflows/update.yml)<br>
via [uniswap-v2-loader](https://github.com/calp-pro/uniswap-v2-loader)

Data:
- `dump_pairs.bin` 148 Kb+ 
- `dump_tokens.bin` 147 Kb+
- `dump_p2tt.bin` 45 Kb+

## Output format
`load` and subscribe` methods return collection of pools/pairs.
```js
[
    ...
    {
        id: 13,
        pair: '0x29ba6dddcc17513855fcd3f710be89b50cf17e5b',
        token0: '0xbec299f79fe8edf9f7374113d576f9b7c008b154',
        token1: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
    },
    ...
]
```
where:
- `13`
  * pair/pool index at factory contract
- `0x29ba6dddcc17513855fcd3f710be89b50cf17e5b`
  * FLAKE/WETH AMM [contract](https://etherscan.io/address/0x29ba6dddcc17513855fcd3f710be89b50cf17e5b) address
- `0xbec299f79fe8edf9f7374113d576f9b7c008b154`
  * FLAKE ERC-20 token [contract](https://etherscan.io/token/0xbec299f79fe8edf9f7374113d576f9b7c008b154) address
- `0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2`
  * WETH ERC-20 token [contract](https://etherscan.io/token/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2) address

## API
Same implementation as other Uniswap v2 based protocols.<br>
Base API reference: [uniswap-v2-loader](https://github.com/calp-pro/uniswap-v2-loader?tab=readme-ov-file#api-reference).<br>
Predefined `filename` with value `dump` & `csv: false`.

## Usage CLI/API:
```bash
> node -e "require('pancakeswap-dump').load().then(pairs => console.log(pairs.length))"
> 7537
```
