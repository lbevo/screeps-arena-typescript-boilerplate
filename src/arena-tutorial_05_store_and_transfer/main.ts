import { getObjectsByPrototype } from 'game/utils';
import { Creep, StructureContainer, StructureTower } from 'game/prototypes';
import { RESOURCE_ENERGY } from 'game/constants';

export function loop(): void {
  const creep = getObjectsByPrototype(Creep).find((creep) => creep.my);
  const enemy = getObjectsByPrototype(Creep).find((creep) => !creep.my);
  const tower = getObjectsByPrototype(StructureTower).find((tower) => tower.my);
  const container = getObjectsByPrototype(StructureContainer).shift();

  if (creep) {
    if (creep.store[RESOURCE_ENERGY] === 0 && container) {
      creep.withdraw(container, RESOURCE_ENERGY) ;
    } else if (tower) {
      creep.transfer(tower, RESOURCE_ENERGY);
    }
  }

  if (tower && enemy) {
    tower.attack(enemy);
  }
}
