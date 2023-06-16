import { getObjectsByPrototype, getRange } from 'game/utils';
import { Creep } from 'game/prototypes';
import { ERR_NOT_IN_RANGE } from 'game/constants';
import { getDistanceOfClosestEnemy, getMySpawn } from '../helpers';

export const defenseRole = (creep: Creep): void => {
  const enemies = getObjectsByPrototype(Creep).filter(c => !c.my);
  const distanceOfClosestEnemy = getDistanceOfClosestEnemy(creep, enemies);

  if (distanceOfClosestEnemy < 15) {
    // When they come to close, we attack them
    const target = creep.findClosestByPath(enemies);
    if (creep.attack(target) === ERR_NOT_IN_RANGE) {
      creep.moveTo(target);
    }
  } else {
    const spawn = getMySpawn();

    if (spawn) {
      const closestEnemy = creep.findClosestByPath(enemies);
      const distanceOfMySpawn = getRange(spawn, creep);

      if (distanceOfMySpawn > 6) {
        // No more enemies but we are too far from the spawn. We come closer
        creep.moveTo(spawn);
      } else if (distanceOfMySpawn < 4 && closestEnemy) {
        // We are too close from the spawn, and we could block it from spawning new creeps
        // We move a bit in the direction of the closest enemy
        creep.moveTo(closestEnemy);
      }
    }
  }
};
