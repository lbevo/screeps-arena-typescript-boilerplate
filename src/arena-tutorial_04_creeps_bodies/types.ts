import type { Creep } from 'game/prototypes';

type KeysMatching<T, V> = {[K in keyof T]-?: T[K] extends V ? K : never}[keyof T];

export type CreepAction = KeysMatching<Creep, (creep: Creep) => number>;
