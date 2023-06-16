import { getObjectsByPrototype } from 'game/utils';
import { Creep, StructureSpawn, Flag } from 'game/prototypes';
import { MOVE } from 'game/constants';

export function loop(): void {
  const spawn = getObjectsByPrototype(StructureSpawn).find((spawn) => spawn.my);
  const creeps = getObjectsByPrototype(Creep).filter((creep) => creep.my);
  const flags = getObjectsByPrototype(Flag);

  if (spawn) {
    spawn.spawnCreep([MOVE, MOVE]);
  }

  creeps.forEach((creep, index) => {
    if (flags[index]) {
      creep.moveTo(flags[index]);
    }
  });
}
