import http from 'http';
import morgan from 'morgan';
import app from './app';
import { loadPlanetsData } from './models/planets.model';

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  await loadPlanetsData();

  server.listen(PORT, async () => {});
}

startServer();
