import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite';

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
    plugins: [react(), tailwindcss()],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'ReactIcons',
            fileName: () => `index.js`,
            formats: ['es'],
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
        },
        target: 'esnext',
        outDir: 'dist',
        emptyOutDir: false,
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
    },
    optimizeDeps: {
        include: ['react', 'react-dom'],
        noDiscovery: true,
        esbuildOptions: {
            target: 'esnext',
            jsx: 'automatic'
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
});