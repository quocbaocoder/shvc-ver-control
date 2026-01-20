// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// 1. Xóa dòng import cloudflare vì GitHub Pages không dùng cái này
// import cloudflare from "@astrojs/cloudflare"; 

// https://astro.build/config
export default defineConfig({
  // 2. QUAN TRỌNG: Phải có site và base để Astro biết đường dẫn tải CSS/JS
  site: "https://quocbaocoder.github.io",
  base: "/shvc-ver-control",

  // 3. GitHub Pages là web tĩnh, nên đổi thành 'static' (hoặc xóa dòng này vì mặc định là static)
  // Tuyệt đối KHÔNG dùng "server" trên GitHub Pages
  output: "static", 

  devToolbar: {
    enabled: false,
  },
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },

  // 4. Xóa toàn bộ phần adapter cloudflare
  // adapter: cloudflare({
  //   imageService: "compile",
  //   sessionKVBindingName: "VFDashboard",
  // }),
});