const noble = require('@abandonware/noble');

const VALVE_MANUFACTURER_DATA = Buffer.from([0x5D, 0x05]);
const GATT_SERVICE_UUID = '000015231212efde1523785feabcd124';
const GATT_CHARACTERISTIC_UUID = '000015251212efde1523785feabcd124';

const POWER_ON = Buffer.from([0x01]);
const POWER_OFF = Buffer.from([0x00]);

async function changeState(enable, numberStation) {
  const peripherals = await (new Promise((resolve) => {
    const savedPeripherals = [];
    noble.on('discover', async (peripheral) => {
      const { manufacturerData } = peripheral.advertisement;
      if (manufacturerData === undefined
        || !manufacturerData.slice(0, 2).equals(VALVE_MANUFACTURER_DATA)) {
        return;
      }
      savedPeripherals.push(peripheral);
      if (savedPeripherals.length === numberStation) {
        resolve(savedPeripherals);
      }
    });

    noble.startScanningAsync();
  }));

  const payload = enable ? POWER_ON : POWER_OFF;
  await peripherals.reduce(async (acc, peripheral) => {
    await acc;

    await peripheral.connectAsync();

    const [service] = await peripheral.discoverServicesAsync([GATT_SERVICE_UUID]);
    const [characteristic] = await service.discoverCharacteristicsAsync([GATT_CHARACTERISTIC_UUID]);
    await characteristic.writeAsync(payload, false);

    return peripheral.disconnectAsync();
  }, Promise.resolve());

  process.exit(0);
}

module.exports = {
  changeState,
};
