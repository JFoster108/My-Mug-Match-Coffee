import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      "Content-Security-Policy":
        "default-src 'self' 'unsafe-inline' data: https://fonts.googleapis.com https://fonts.gstatic.com;",
    },
  },
});
