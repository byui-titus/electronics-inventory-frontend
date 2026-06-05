import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
    root: "src",
    build: {
        outDir: "../dist",
        rollupOptions: {
            input: {
                main: resolve(__dirname, "src/index.html"),
                product: resolve(__dirname, "src/product.html"),
                addProduct: resolve(__dirname, "src/add-product.html"),
                editProduct: resolve(__dirname, "src/edit-product.html"),
            },
        },
    },
});