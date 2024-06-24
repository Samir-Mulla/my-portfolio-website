import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        "/Logo.svg", // Exclude Logo.svg from the build
      ],
    },
  },
});
