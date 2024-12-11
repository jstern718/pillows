import express from 'express';
import { createRequestHandler } from '@remix-run/express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProduction = process.env.NODE_ENV === 'production';
const app = express();

let viteDevServer;
if (!isProduction) {
  viteDevServer = await createViteServer({
    server: { middlewareMode: 'ssr' },
    appType: 'custom',
  });
  app.use(viteDevServer.middlewares);
} else {
  app.use(
    '/assets',
    express.static('build/client/assets', {
      immutable: true,
      maxAge: '1y',
    })
  );
  app.use(express.static('build/client', { maxAge: '1h' }));
}

app.all(
  '*',
  createRequestHandler({
    build: isProduction
      ? await import('./build/server/index.js')
      : () => viteDevServer.ssrLoadModule('virtual:remix/server-build'),
  })
);

const port = 3000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
