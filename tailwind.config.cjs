module.exports = {
	content: ['./src/**/*.svelte', './src/**/*.html'],
	darkMode: 'class',
	theme: {
		extend: {}
	},
	variants: {},
	daisyui: {
		themes: [
			{
				ascella: {
					primary: '#1EB854',
					secondary: '#1FD65F',
					accent: '#D99330',
					neutral: '#111827',
					'base-100': '#000000',
					info: '#3ABFF8',
					success: '#36D399',
					warning: '#FBBD23',
					error: '#F87272'
				}
			}
		]
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};
