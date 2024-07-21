import { Server } from 'socket.io';
import { createServer } from 'http';

import { ws_port } from './config/config.js'
import app from './app.js';

const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5175'
    }
});

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);
  
    // Assign player to socket
    socket.emit('assignPlayer', socket.id);

    // Handle paddle movement
    socket.on('movePaddle', (data) => {
        console.log('movePaddle', data);
        // Broadcast move to other player
        // socket.broadcast.emit('paddleMoved', { id: socket.id, paddleY: data.paddleY });
        socket.emit('paddleMoved', { id: socket.id, paddleY: data.paddleY });
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('A user disconnected:', socket.id);
    });
});

server.listen(ws_port, () => {
   console.log(`Web Socket running on port ${ws_port}`);
});