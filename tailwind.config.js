import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			animation: {
				fadeIn: 'fadeIn 1s ease-in-out forwards',
				fadeOut: 'fadeOut 1s ease-in-out forwards'
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				fadeOut: {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' }
				}
			}
		}
	},
	plugins: [daisyui]
};
