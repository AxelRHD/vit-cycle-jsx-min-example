import { defineConfig } from 'vite';
import babel from "vite-babel-plugin";

export default defineConfig({
  plugins: [
    babel(),
  ],
  server: {
    host: true
  }
})