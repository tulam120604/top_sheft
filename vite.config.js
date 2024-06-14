import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                shop: resolve(__dirname, "./src/products.html"),
                detail: resolve(__dirname, "./src/detail.html"),
                cart: resolve(__dirname, "./src/cart.html"),
            },
        },
    },
  resolve: {
    alias: {
      '@components': '/src/components',
      '@utils': '/src/utils',
      '@images': './Images', // Thay đổi đường dẫn tới thư mục ảnh của bạn
    },
  },
});