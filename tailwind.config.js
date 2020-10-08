module.exports = {
  future: {
     removeDeprecatedGapUtilities: true,
     purgeLayersByDefault: true,
  },
  purge: ["./pages/**/*.{ts,tsx,js,jsx}", "./src/components/**/*.{ts,tsx,js,jsx}", "./src/views/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
