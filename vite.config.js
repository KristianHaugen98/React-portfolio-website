import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    // This makes is easier and cleaner to use imports on our project.
    alias: {
      "@": path.resolve(import.meta.dirname, "../src"),
    },
  },
});
