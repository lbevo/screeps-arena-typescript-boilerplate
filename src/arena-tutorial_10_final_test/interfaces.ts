import type { BodyPartType, Creep } from 'game/prototypes';

export enum CreepType {
  WORKER = 'worker',
  DEFENSE = 'defense'
}

export interface IBuildStep {
  type: CreepType;
  body: Array<BodyPartType>;
  max: number;
}

export interface ICreep {
  type: CreepType;
  creep: Creep;
}
