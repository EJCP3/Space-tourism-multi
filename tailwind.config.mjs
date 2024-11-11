/** @type {import('tailwindcss').Config} */

import animations from '@midudev/tailwind-animations'


export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {

			fontFamily: {
        "principal": ['Red Hat Display, sans-serif'],
      },
      
      colors:{
        //Primary
        "BLUE-900": "#0B0D17",
        "BLUE-300": "#D0D6F9",
		"white": "#FFFFFF",
        
      },

      screens: {
        'mobile': '375px',
        'pc': '1440px',
        'md1': '900px',
      },
		},
	},
	plugins: [animations],
}
