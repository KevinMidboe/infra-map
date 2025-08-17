import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		proxy: {
			'/proxmox': {
				target: 'https://apollo.schleppe:8006/api2/json',
				secure: false
			}
		}
	}
});
