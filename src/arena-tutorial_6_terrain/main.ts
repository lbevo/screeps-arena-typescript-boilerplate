import { findClosestByPath, getObjectsByPrototype } from 'game/utils';
import { Creep, Flag } from 'game/prototypes';

export function loop(): void {
  const creeps = getObjectsByPrototype(Creep).filter((creep) => creep.my);
  const flags = getObjectsByPrototype(Flag);

  creeps.forEach((creep) => creep.moveTo(findClosestByPath(creep, flags)));
}
