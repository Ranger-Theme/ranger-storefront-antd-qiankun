// vite.config.ts
import path from "node:path";
import { defineConfig } from "file:///Users/luolan/Websites/ranger-storefront-antd-qiankun/node_modules/.pnpm/vite@4.5.3_@types+node@20.5.1_terser@5.31.2/node_modules/vite/dist/node/index.js";
import { baseConfig } from "file:///Users/luolan/Websites/ranger-storefront-antd-qiankun/node_modules/.pnpm/@ranger-theme+vite-config@0.5.1_@types+node@20.5.1_postcss@8.4.39_terser@5.31.2_ts-node@10.9.2_typescript@5.5.3/node_modules/@ranger-theme/vite-config/dist/index.js";

// package.json
var package_default = {
  name: "@ranger-theme/main",
  private: true,
  version: "0.1.0",
  type: "module",
  scripts: {
    dev: "vite",
    build: "tsc && vite build",
    lint: "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    preview: "vite preview",
    clean: "rm -rf dist"
  },
  dependencies: {
    "@ant-design/cssinjs": "^1.21.0",
    "@emotion/react": "^11.11.4",
    "@emotion/styled": "^11.11.5",
    "@ranger-theme/admin": "workspace:^",
    "@ranger-theme/hooks": "^0.3.1",
    "@ranger-theme/qiankun": "workspace:^",
    "@ranger-theme/vite-config": "^0.5.1",
    "@reduxjs/toolkit": "^2.2.6",
    "@vitejs/plugin-react-swc": "^3.5.0",
    antd: "^5.19.1",
    react: "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^5.2.1",
    "react-intl": "^6.6.8",
    "react-redux": "^9.1.2",
    "react-router-dom": "^6.24.1"
  },
  devDependencies: {
    "@ranger-theme/eslint-config": "^0.4.0",
    "@ranger-theme/ts-config": "^0.1.0",
    "@types/react": "^18.2.56",
    "@types/react-dom": "^18.2.19",
    eslint: "^8.2.0",
    typescript: "^5.2.2",
    vite: "^4.5.3"
  }
};

// vite.config.ts
var __vite_injected_original_dirname = "/Users/luolan/Websites/ranger-storefront-antd-qiankun/apps/ranger-main";
var viteConfig = ({ mode }) => {
  const defaultConfig = baseConfig({
    mode,
    pkg: package_default,
    https: false,
    port: 3e3,
    outDir: "build",
    entry: path.resolve(__vite_injected_original_dirname, "bootstrap/main.tsx")
  });
  return defineConfig({
    ...defaultConfig,
    base: "/",
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "./"),
        "~": path.resolve(__vite_injected_original_dirname, "./")
      }
    }
  });
};
var vite_config_default = viteConfig;
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2x1b2xhbi9XZWJzaXRlcy9yYW5nZXItc3RvcmVmcm9udC1hbnRkLXFpYW5rdW4vYXBwcy9yYW5nZXItbWFpblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2x1b2xhbi9XZWJzaXRlcy9yYW5nZXItc3RvcmVmcm9udC1hbnRkLXFpYW5rdW4vYXBwcy9yYW5nZXItbWFpbi92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvbHVvbGFuL1dlYnNpdGVzL3Jhbmdlci1zdG9yZWZyb250LWFudGQtcWlhbmt1bi9hcHBzL3Jhbmdlci1tYWluL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB0eXBlIHsgQ29uZmlnRW52IH0gZnJvbSAndml0ZSdcblxuaW1wb3J0IHsgYmFzZUNvbmZpZyB9IGZyb20gJ0ByYW5nZXItdGhlbWUvdml0ZS1jb25maWcnXG5cbmltcG9ydCBwa2cgZnJvbSAnLi9wYWNrYWdlLmpzb24nXG5cbmNvbnN0IHZpdGVDb25maWc6IGFueSA9ICh7IG1vZGUgfTogQ29uZmlnRW52KSA9PiB7XG4gIGNvbnN0IGRlZmF1bHRDb25maWcgPSBiYXNlQ29uZmlnKHtcbiAgICBtb2RlLFxuICAgIHBrZyxcbiAgICBodHRwczogZmFsc2UsXG4gICAgcG9ydDogMzAwMCxcbiAgICBvdXREaXI6ICdidWlsZCcsXG4gICAgZW50cnk6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdib290c3RyYXAvbWFpbi50c3gnKVxuICB9KVxuXG4gIHJldHVybiBkZWZpbmVDb25maWcoe1xuICAgIC4uLmRlZmF1bHRDb25maWcsXG4gICAgYmFzZTogJy8nLFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgICdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vJyksXG4gICAgICAgICd+JzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vJylcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHZpdGVDb25maWdcbiIsICJ7XG4gIFwibmFtZVwiOiBcIkByYW5nZXItdGhlbWUvbWFpblwiLFxuICBcInByaXZhdGVcIjogdHJ1ZSxcbiAgXCJ2ZXJzaW9uXCI6IFwiMC4xLjBcIixcbiAgXCJ0eXBlXCI6IFwibW9kdWxlXCIsXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJkZXZcIjogXCJ2aXRlXCIsXG4gICAgXCJidWlsZFwiOiBcInRzYyAmJiB2aXRlIGJ1aWxkXCIsXG4gICAgXCJsaW50XCI6IFwiZXNsaW50IC4gLS1leHQgdHMsdHN4IC0tcmVwb3J0LXVudXNlZC1kaXNhYmxlLWRpcmVjdGl2ZXMgLS1tYXgtd2FybmluZ3MgMFwiLFxuICAgIFwicHJldmlld1wiOiBcInZpdGUgcHJldmlld1wiLFxuICAgIFwiY2xlYW5cIjogXCJybSAtcmYgZGlzdFwiXG4gIH0sXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBhbnQtZGVzaWduL2Nzc2luanNcIjogXCJeMS4yMS4wXCIsXG4gICAgXCJAZW1vdGlvbi9yZWFjdFwiOiBcIl4xMS4xMS40XCIsXG4gICAgXCJAZW1vdGlvbi9zdHlsZWRcIjogXCJeMTEuMTEuNVwiLFxuICAgIFwiQHJhbmdlci10aGVtZS9hZG1pblwiOiBcIndvcmtzcGFjZTpeXCIsXG4gICAgXCJAcmFuZ2VyLXRoZW1lL2hvb2tzXCI6IFwiXjAuMy4xXCIsXG4gICAgXCJAcmFuZ2VyLXRoZW1lL3FpYW5rdW5cIjogXCJ3b3Jrc3BhY2U6XlwiLFxuICAgIFwiQHJhbmdlci10aGVtZS92aXRlLWNvbmZpZ1wiOiBcIl4wLjUuMVwiLFxuICAgIFwiQHJlZHV4anMvdG9vbGtpdFwiOiBcIl4yLjIuNlwiLFxuICAgIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI6IFwiXjMuNS4wXCIsXG4gICAgXCJhbnRkXCI6IFwiXjUuMTkuMVwiLFxuICAgIFwicmVhY3RcIjogXCJeMTguMi4wXCIsXG4gICAgXCJyZWFjdC1kb21cIjogXCJeMTguMi4wXCIsXG4gICAgXCJyZWFjdC1pY29uc1wiOiBcIl41LjIuMVwiLFxuICAgIFwicmVhY3QtaW50bFwiOiBcIl42LjYuOFwiLFxuICAgIFwicmVhY3QtcmVkdXhcIjogXCJeOS4xLjJcIixcbiAgICBcInJlYWN0LXJvdXRlci1kb21cIjogXCJeNi4yNC4xXCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQHJhbmdlci10aGVtZS9lc2xpbnQtY29uZmlnXCI6IFwiXjAuNC4wXCIsXG4gICAgXCJAcmFuZ2VyLXRoZW1lL3RzLWNvbmZpZ1wiOiBcIl4wLjEuMFwiLFxuICAgIFwiQHR5cGVzL3JlYWN0XCI6IFwiXjE4LjIuNTZcIixcbiAgICBcIkB0eXBlcy9yZWFjdC1kb21cIjogXCJeMTguMi4xOVwiLFxuICAgIFwiZXNsaW50XCI6IFwiXjguMi4wXCIsXG4gICAgXCJ0eXBlc2NyaXB0XCI6IFwiXjUuMi4yXCIsXG4gICAgXCJ2aXRlXCI6IFwiXjQuNS4zXCJcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvWSxPQUFPLFVBQVU7QUFDclosU0FBUyxvQkFBb0I7QUFHN0IsU0FBUyxrQkFBa0I7OztBQ0ozQjtBQUFBLEVBQ0UsTUFBUTtBQUFBLEVBQ1IsU0FBVztBQUFBLEVBQ1gsU0FBVztBQUFBLEVBQ1gsTUFBUTtBQUFBLEVBQ1IsU0FBVztBQUFBLElBQ1QsS0FBTztBQUFBLElBQ1AsT0FBUztBQUFBLElBQ1QsTUFBUTtBQUFBLElBQ1IsU0FBVztBQUFBLElBQ1gsT0FBUztBQUFBLEVBQ1g7QUFBQSxFQUNBLGNBQWdCO0FBQUEsSUFDZCx1QkFBdUI7QUFBQSxJQUN2QixrQkFBa0I7QUFBQSxJQUNsQixtQkFBbUI7QUFBQSxJQUNuQix1QkFBdUI7QUFBQSxJQUN2Qix1QkFBdUI7QUFBQSxJQUN2Qix5QkFBeUI7QUFBQSxJQUN6Qiw2QkFBNkI7QUFBQSxJQUM3QixvQkFBb0I7QUFBQSxJQUNwQiw0QkFBNEI7QUFBQSxJQUM1QixNQUFRO0FBQUEsSUFDUixPQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsSUFDYixlQUFlO0FBQUEsSUFDZixjQUFjO0FBQUEsSUFDZCxlQUFlO0FBQUEsSUFDZixvQkFBb0I7QUFBQSxFQUN0QjtBQUFBLEVBQ0EsaUJBQW1CO0FBQUEsSUFDakIsK0JBQStCO0FBQUEsSUFDL0IsMkJBQTJCO0FBQUEsSUFDM0IsZ0JBQWdCO0FBQUEsSUFDaEIsb0JBQW9CO0FBQUEsSUFDcEIsUUFBVTtBQUFBLElBQ1YsWUFBYztBQUFBLElBQ2QsTUFBUTtBQUFBLEVBQ1Y7QUFDRjs7O0FEdkNBLElBQU0sbUNBQW1DO0FBUXpDLElBQU0sYUFBa0IsQ0FBQyxFQUFFLEtBQUssTUFBaUI7QUFDL0MsUUFBTSxnQkFBZ0IsV0FBVztBQUFBLElBQy9CO0FBQUEsSUFDQTtBQUFBLElBQ0EsT0FBTztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsT0FBTyxLQUFLLFFBQVEsa0NBQVcsb0JBQW9CO0FBQUEsRUFDckQsQ0FBQztBQUVELFNBQU8sYUFBYTtBQUFBLElBQ2xCLEdBQUc7QUFBQSxJQUNILE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxRQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLElBQUk7QUFBQSxRQUNqQyxLQUFLLEtBQUssUUFBUSxrQ0FBVyxJQUFJO0FBQUEsTUFDbkM7QUFBQSxJQUNGO0FBQUEsRUFDRixDQUFDO0FBQ0g7QUFFQSxJQUFPLHNCQUFROyIsCiAgIm5hbWVzIjogW10KfQo=
