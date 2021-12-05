import express, { Request, Response } from 'express';
import next from 'next';

const port = parseInt(process.env.PORT as string, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const env = dev ? 'development' : process.env.NODE_ENV;

app.prepare().then(() => {
  const server = express();
  server.use(express.urlencoded({ extended: true }));
  server.use(express.json());

  // -- EXAMPLES --
  //   server.get('/a', (req, res) => {
  //     return app.render(req, res, '/a', req.query);
  //   });

  //   server.get('/b', (req, res) => {
  //     return app.render(req, res, '/b', req.query);
  //   });

  server.all('*', (req: Request, res: Response) => {
    return handle(req, res);
  });

  server.listen(port, (err?: string): void => {
    if (err) throw err as string;
    // eslint-disable-next-line
    console.log(`> Ready on http://localhost:${port} as ${env}`);
  });
});
