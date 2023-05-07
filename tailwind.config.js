const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "wiggle": {
          '0%, 100%': { transform: 'rotateZ(-1deg)' },
          '50%': { transform: 'rotateZ(1deg)' },
        },
        "white-grey": {
          '0%, 100%': { fill: 'white' },
          '50%': { fill: '#E6E6E6' },
        },
        "white-blue": {
          '0%, 100%': { fill: 'white' },
          '50%': { fill: '#6C63FF' },
        },
        "blue-grey": {
          '0%, 100%': { fill: '#6C63FF' },
          '50%': { fill: '#E6E6E6' },
        },
        "blue-white": {
          '0%, 100%': { fill: '#6C63FF' },
          '50%': { fill: 'white' },
        },
        "grey-white": {
          '0%, 100%': { fill: '#E6E6E6' },
          '50%': { fill: 'white' },
        },
        "grey-blue": {
          '0%, 100%': { fill: '#E6E6E6' },
          '50%': { fill: '#6C63FF' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "wiggle": "wiggle 1s ease-in-out infinite",
        "wiggle-fast": "wiggle 200ms ease-in-out infinite",
        "white-grey": "white-grey 1800ms infinite",
        "white-blue": "white-blue 2000ms infinite",
        "blue-grey": "blue-grey 2200ms infinite",
        "blue-white": "blue-white 2100ms infinite",
        "grey-white": "grey-white 1900ms infinite",
        "grey-blue": "grey-blue 2000ms infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
