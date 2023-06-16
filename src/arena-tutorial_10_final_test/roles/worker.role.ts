import { ERR_NOT_IN_RANGE, RESOURCE_ENERGY } from 'game/constants';
import type { Creep } from 'game/prototypes';
import { getClosestSource, getMySpawn } from '../helpers';

export const workerRole = (creep: Creep): void => {
  if (creep.store.getFreeCapacity(RESOURCE_ENERGY)) {
    const source = getClosestSource(creep);
    if (source && creep.harvest(source) === ERR_NOT_IN_RANGE) {
      creep.moveTo(source);
    }
  } else {
    const spawn = getMySpawn();
    if (spawn && creep.transfer(spawn, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
      creep.moveTo(spawn);
    }
  }
};
