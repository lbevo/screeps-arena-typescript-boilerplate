import clear from 'rollup-plugin-clear';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import fg from 'fast-glob';

const targetArena = process.argv[4] || '';

function getOptions(arenaSrc) {
  const outDir = arenaSrc.replace('src/', 'dist/');

  return {
    onwarn: () => {}, // Disable warnings
    input: `${arenaSrc}/main.ts`,
    external: ['game', 'game/prototypes', 'game/constants', 'game/utils', 'game/path-finder', 'arena', 'game/visual'], // <-- suppresses the warning
    output: {
      dir: outDir,
      format: 'esm',
      entryFileNames: '[name].mjs',
      sourcemap: false,
      preserveModules: true,
      preserveModulesRoot: arenaSrc
    },

    plugins: [
      clear({ targets: targetArena === '' ? ['dist'] : [outDir] }), // If targeted build, only clear target sub-directory
      resolve({ rootDir: 'src' }),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' })
    ]
  };
}

const arenas = fg.sync(`src/*arena-*${targetArena}*`, { onlyDirectories: true });
if (arenas.length === 0) {
  throw new Error('No matching arenas found in src/. Exiting');
} else {
  if (targetArena === '') {
    console.log(`No arena targeted. Building all ${arenas.length} arenas.`);
  } else {
    console.log(`Buidling ${arenas.length} arena(s) for target "${targetArena}"`);
  }
}

export default arenas.map(getOptions);
