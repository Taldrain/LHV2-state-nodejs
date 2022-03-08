LHV2 - node-state
-----------------

## Setup

- get a recent version of node.js. Tested with node v17
- install the dependencies. `npm i`
- (optional) [install the dependencies of `noble`](https://github.com/abandonware/noble#linux)
- [allow node to access the bluetooth](https://github.com/abandonware/noble#running-without-rootsudo-linux-specific)


## Run

To enable the stations:

` $ node src/index --set on`

To disable the stations:

` $ node src/index --set off`
