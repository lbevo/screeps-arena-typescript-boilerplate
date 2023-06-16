import { getObjectsByPrototype, getRange } from 'game/utils';
import type { Creep } from 'game/prototypes';
import { Source, StructureSpawn } from 'game/prototypes';

export const getMySpawn = (): StructureSpawn | undefined => {
  return getObjectsByPrototype(StructureSpawn).find(s => s.my);
};

export const getClosestSource = (creep: Creep): Source | undefined => {
  return creep.findClosestByPath(getObjectsByPrototype(Source));
};

export const getDistanceOfClosestEnemy = (creep: Creep, enemies: Array<Creep>): number => {
  return enemies.reduce((acc, enemy) => {
    const range = getRange(enemy, creep);
    return range > acc ? acc : range;
  }, Infinity);
};
