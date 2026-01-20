import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // 1. Phải đúng tên user của bạn
  site: "https://github.com/quocbaocoder/shvc-ver-control",
  
  // 2. Phải CHÍNH XÁC tên repo (phân biệt hoa thường)
  // Nếu repo là "shvc-ver-control", thì để như dưới. 
  // Nếu repo là "SHVC-Ver-Control", phải sửa lại cho khớp.
  base: "/shvc-ver-control", 

  output: "static", // Bắt buộc là static

  integrations: [react()],
  
  vite: {
    plugins: [tailwindcss()],
  },
  
  // Đảm bảo đã XÓA HẾT đoạn adapter: cloudflare(...)
});