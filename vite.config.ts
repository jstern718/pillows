import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";

+installGlobals();

export default defineConfig({
  plugins: [
    remix({
      basename: "/",
      buildDirectory: "build",
      future: {
        /* any enabled future flags */
      },
      ignoredRouteFiles: ["**/*.css"],
      routes(defineRoutes) {
          return defineRoutes((route) => {
              route("/", "root.tsx");
              route("/cooling", "routes/cooling.jsx");
              route("/mostpopular", "routes/mostPopular.jsx");
              route("/thin", "routes/thin.jsx");
              route("/memoryfoam", "routes/memoryFoam.jsx");
              route("/shreddedfoam", "routes/shreddedfoam.jsx");
              route("/pillowcases", "routes/pillowCases.jsx");
          });
      },
      serverBuildFile: "index.js",
    })
  ],
});

