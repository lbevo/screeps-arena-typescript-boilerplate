import { getObjectsByPrototype } from 'game/utils';
import { Creep, Flag } from 'game/prototypes';

export function loop(): void {
  const creep = getObjectsByPrototype(Creep).shift();
  const flag = getObjectsByPrototype(Flag).shift();

  if (creep && flag) {
    creep.moveTo(flag);
  }
}
