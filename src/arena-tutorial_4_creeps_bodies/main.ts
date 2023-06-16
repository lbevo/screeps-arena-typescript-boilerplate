import { getObjectsByPrototype } from 'game/utils';
import type { BodyPartType } from 'game/prototypes';
import { Creep } from 'game/prototypes';
import { ATTACK, ERR_NOT_IN_RANGE, RANGED_ATTACK, HEAL } from 'game/constants';
import type { CreepAction } from './types';

const hasAbility = (creep: Creep, ability: BodyPartType): boolean => {
  return creep.body.some(part => part.type === ability);
};

const doToOrMoveTo = (creep: Creep, action: CreepAction, to: Creep): void => {
  if (creep[action](to) === ERR_NOT_IN_RANGE) {
    creep.moveTo(to);
  }
};

export function loop(): void {
  const creeps = getObjectsByPrototype(Creep).filter((creep) => creep.my);
  const enemyCreep = getObjectsByPrototype(Creep).find((creep) => !creep.my);
  const damaged = creeps.find((creep) => creep.hits < creep.hitsMax);

  creeps.forEach((creep) => {
    if (hasAbility(creep, RANGED_ATTACK) && enemyCreep) {
      doToOrMoveTo(creep, 'rangedAttack', enemyCreep);
    } else if (hasAbility(creep, ATTACK) && enemyCreep) {
      doToOrMoveTo(creep, 'attack', enemyCreep);
    } else if (hasAbility(creep, HEAL) && damaged) {
      doToOrMoveTo(creep, 'heal', damaged);
    }
  });
}
