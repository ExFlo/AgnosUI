import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import {alias} from '../viteAlias';
import {dependencies, peerDependencies} from './package.json';
const external = [...Object.keys(dependencies), ...Object.keys(peerDependencies)];

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 3000,
	},
	build: {
		lib: {
			entry: 'lib/index',
			fileName: 'index',
			formats: ['es', 'cjs'],
		},
		rollupOptions: {
			external: (id) => external.some((dependency) => id === dependency || id.startsWith(`${dependency}/`)),
		},
		emptyOutDir: true,
		outDir: path.join(__dirname, 'dist/lib'),
	},
	resolve: {
		alias,
	},
	plugins: [react()],
});