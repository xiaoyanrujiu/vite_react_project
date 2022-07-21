import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./", // 配置打包文件路径
  server: {
    open: true, // 在默认浏览器中自动打开该地址
  },
});
