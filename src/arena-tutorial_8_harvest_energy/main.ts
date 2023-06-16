import { getObjectsByPrototype } from 'game/utils';
import { Creep, Source, StructureSpawn } from 'game/prototypes';
import { ERR_NOT_IN_RANGE, RESOURCE_ENERGY } from 'game/constants';

export function loop(): void {
  const creep = getObjectsByPrototype(Creep).shift();
  const source = getObjectsByPrototype(Source).shift();
  const spawn = getObjectsByPrototype(StructureSpawn).shift();

  if (creep) {
    if (!creep.store[RESOURCE_ENERGY] && source) {
      if (creep.harvest(source) === ERR_NOT_IN_RANGE) {
        creep.moveTo(source);
      }
    } else if (spawn) {
      if (creep.transfer(spawn, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
        creep.moveTo(spawn);
      }
    }
  }
}
