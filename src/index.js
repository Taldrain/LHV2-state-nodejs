const { program } = require('commander');

const { changeState } = require('./lighthouse');

program
  .option('-s, --set <status>', 'Set the station on or off', 'off')
  .option('-n, --number-station <number-stations>', 'The number of stations available', 2)
  .action(({ set, numberStation }) => changeState(set.toLowerCase() === 'on', numberStation));

program.parse();
