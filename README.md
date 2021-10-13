# forbitspace V2

[![Lint](https://github.com/forbitspace/forbitspace-core/workflows/Lint/badge.svg)](https://github.com/forbitspace/forbitspace-core/actions/workflows/lint.yml?query=workflow%3ALint++)
[![Tests](https://github.com/forbitspace/forbitspace-core/workflows/Tests/badge.svg)](https://github.com/forbitspace/forbitspace-core/actions/workflows/tests.yml?query=workflow%3ATests++)

This repository contains the core smart contracts for the forbitspace Protocol. For higher level contracts, see the forbitspace-periphery repository.

## Local Development
In order to deploy this code to a local testnet, you should install the npm package @forbitspace/core and import the factory bytecode located at @forbitspace/core/artifacts/contracts/forbitspaceFactory.sol/forbitspaceFactory.json. For example:
```sh
import {
  abi as FACTORY_ABI,
  bytecode as FACTORY_BYTECODE,
} from '@forbitspace/core/artifacts/contracts/forbitspaceFactory.sol/forbitspaceFactory.json'

// deploy the bytecode
```
This will ensure that you are testing against the same bytecode that is deployed to mainnet and public testnets, and all Uniswap code will correctly interoperate with your local deployment.
## Using solidity interfaces
The forbitspace interfaces are available for import into solidity smart contracts via the npm artifact @forbitspace/core, e.g.:
```sh
import '@forbitspace/core/contracts/interfaces/IforbitspacePool.sol';

contract MyContract {
  IforbitspacePool pool;

  function doSomethingWithPool() {
    // pool.swap(...);
  }
}


```
