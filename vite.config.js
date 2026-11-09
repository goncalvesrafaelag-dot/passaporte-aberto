import { defineConfig } from "vite";

// base relativa: funciona na raiz de um domínio, na Lovable e no GitHub Pages (/passaporte-aberto/)
export default defineConfig({
  base: "./",
  server: { port: 8080 },
});
