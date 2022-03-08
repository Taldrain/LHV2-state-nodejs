LHV2-state-nodejs
-----------------

## Setup

- get a recent version of node.js. Tested with node v17
- install the dependencies. `npm i`
- (optional) [install the dependencies of `noble`](https://github.com/abandonware/noble#linux)
- [allow node to access the bluetooth](https://github.com/abandonware/noble#running-without-rootsudo-linux-specific)


## Run

To enable the stations:

` $ node src/index.js --set on`

To disable the stations:

` $ node src/index.js --set off`


## Other resources


- [prefiks/lh.py script](https://gist.github.com/prefiks/e614116fc3983a8e7e5fe326800dc101)
- [DavidRisch/steamvr_utils](https://github.com/DavidRisch/steamvr_utils)
- [risa2000/lh2ctrl](https://github.com/risa2000/lh2ctrl)
