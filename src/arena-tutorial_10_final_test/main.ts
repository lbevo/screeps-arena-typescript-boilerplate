import { SpawnController } from './controllers/spawn.controller';
import { RolesController } from './controllers/roles.controller';

const { spawnNext } = SpawnController();
const { assignJobs } = RolesController();

export function loop(): void {
  spawnNext();
  assignJobs();
}
