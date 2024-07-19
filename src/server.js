import { server } from './app.js';
import { port } from './config/config.js';

server.listen(port, () => {
  console.info(`Server running on port ${port}`)
});
