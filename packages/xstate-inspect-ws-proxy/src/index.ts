import { inspect } from '@xstate/inspect/server';
import { WebSocketServer } from 'ws';

const port = parseInt(process.env.PORT ?? '8080');

const wss = new WebSocketServer({
  port
});
wss.on('listening', () => {
  console.log(`Listening on port ${port}`);
});
wss.on('connection', (ws) => {
  console.log('Connection established');
  ws.on('message', (message) => {
    console.log('Received message', message);
  });
});
inspect({ server: wss });
