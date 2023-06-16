import type { IBuildStep, ICreep } from '../interfaces';
import { ATTACK, CARRY, MOVE, WORK } from 'game/constants';
import { getMySpawn } from '../helpers';
import { CreepType } from '../interfaces';

const population: Array<ICreep> = [];

const buildLogic: Array<IBuildStep> = [
  {
    type: CreepType.WORKER,
    body: [WORK, CARRY, MOVE, WORK, CARRY, MOVE],
    max: 2
  },
  {
    type: CreepType.DEFENSE,
    body: [ATTACK, ATTACK, ATTACK, MOVE, MOVE, MOVE],
    max: 3
  }
];

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function SpawnController() {
  const getPopulation = (): Array<ICreep> => population;

  const spawnCreep = (buildStep: IBuildStep): boolean => {
    const spawn = getMySpawn();
    if (spawn) {
      const result = spawn.spawnCreep(buildStep.body);
      if (result.object) {
        population.push({ type: buildStep.type, creep: result.object });
        return true;
      }
    }
    return false;
  };

  const spawnNext = (): void => {
    const nextStep = buildLogic.find((build) => build.max > 0);

    if (nextStep && spawnCreep(nextStep)) {
      nextStep.max--;
    }
  };

  return { spawnNext, getPopulation };
}
