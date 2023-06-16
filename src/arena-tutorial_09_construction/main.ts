import { createConstructionSite, getObjectsByPrototype } from 'game/utils';
import { ConstructionSite, Creep, StructureContainer, StructureTower } from 'game/prototypes';
import { ERR_NOT_IN_RANGE, RESOURCE_ENERGY } from 'game/constants';

export function loop(): void {
  const creep = getObjectsByPrototype(Creep).shift();
  const source = getObjectsByPrototype(StructureContainer).shift();
  const constructionSite = getObjectsByPrototype(ConstructionSite).find((cs) => cs.my);

  if (!constructionSite) {
    createConstructionSite({ x: 50, y: 55 }, StructureTower);
  } else if (creep) {
    if (!creep.store[RESOURCE_ENERGY] && source) {
      if (creep.withdraw(source, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
        creep.moveTo(source);
      }
    } else {
      if (creep.build(constructionSite) === ERR_NOT_IN_RANGE) {
        creep.moveTo(constructionSite);
      }
    }
  }
}
