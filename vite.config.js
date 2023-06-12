import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // resolve: {
  //   alias: {
  //     '@stripe/react-stripe-js': '@stripe/react-stripe-js/dist/index.esm.js',
  //     '@stripe/stripe-js': '@stripe/stripe-js/dist/index.esm.js',
  //   },
  // },
})
