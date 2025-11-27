/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-", // ✅ Prefix added to avoid global CSS conflicts
  important: true, // ✅ Ensures Tailwind styles take priority
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["MyFont", "ui-sans-serif", "system-ui"],
        myfont: ["MyFont", "sans-serif"],
      },
        animation: {
            'spin-slow': 'spin 8s linear infinite',
            'reverse-spin': 'reverse-spin 12s linear infinite',
            'ping': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite'
        },
        keyframes: {
            spin: {
                '0%': {transform: 'rotate(0deg)'},
                '100%': {transform: 'rotate(360deg)'},
        },
          'reverse-spin': {
              '0%': {transform: 'rotate(360deg)'},
              '100%': {transform: 'rotate(0deg)'},
        },
          ping: {
              '0%': {transform: 'scale(1)', opacity: '1'},
              '75%, 100%': {transform: 'scale(1.5)', opacity: '0'},
          }
      },
        backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        },
    },
  },
  plugins: [],
};
