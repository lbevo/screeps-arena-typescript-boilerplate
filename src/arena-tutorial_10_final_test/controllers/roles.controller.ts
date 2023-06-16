import type { CreepType } from '../interfaces';
import type { Creep } from 'game/prototypes';
import { workerRole } from '../roles/worker.role';
import { defenseRole } from '../roles/defense.role';
import { SpawnController } from './spawn.controller';

const roleBinder: Record<CreepType, (creep: Creep) => void> = {
  worker: workerRole,
  defense: defenseRole
};

const { getPopulation } = SpawnController();

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function RolesController() {
  const assignJobs = (): void => {
    const population = getPopulation();
    population.forEach((creep) => roleBinder[creep.type](creep.creep));
  };

  return { assignJobs };
}
