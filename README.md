# <picture><source media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/npm/uniswap-v2-loader@5.0.1/logo-dark.svg"><img alt="calp.pro icon" src="https://cdn.jsdelivr.net/npm/uniswap-v2-loader@5.0.1/logo-light.svg" height="32" align="absmiddle"></picture>&nbsp;&nbsp;pancakeswap-dump

<br>

Static set of addresses (PancakeSwap Ethereum mainnet).<br>
New pairs updates happen every hour at GitHub Action [update.yml](https://github.com/calp-pro/uniswap-v2-dump/actions/workflows/update.yml)<br>
via [uniswap-v2-loader](https://github.com/calp-pro/uniswap-v2-loader)

Data: `dump.csv` ---Kb+ 

CSV schema: `id,pair,token0,token1`

## Example:
```
...

...
```
where:
- ``
  * pair/pool index at factory contract
- ``
  * / AMM [contract](https://etherscan.io/address/) address
- ``
  *  ERC-20 token [contract](https://etherscan.io/token/) address
- ``
  *  ERC-20 token [contract](https://etherscan.io/token/) address

## API
Same implementation as other Uniswap v2 based protocols.<br>
Base API reference: [uniswap-v2-loader](https://github.com/calp-pro/uniswap-v2-loader?tab=readme-ov-file#api-reference).<br>
Predefined `filename` with value `dump.csv`.

## Usage CLI/API:
```bash
> node -e "require('sushiswap-dump').load().then(pairs => console.log(pairs.length))"
> 
```
