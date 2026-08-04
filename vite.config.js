import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// I am tired boss...
const basePath = process.env.NODE_ENV === "production" ? "/Job-Tracker/" : "/";

export default defineConfig({
  base: basePath,
  plugins: [react()],
});
