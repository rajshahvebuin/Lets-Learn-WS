import express
import { WebSocketServer } from 'ws';

const app = express();
const port = 3000;

const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const wss = new WebSocketServer({ server });
wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log(`Received:`, message);
        ws.send(`Thank you for Echo: ${message}`);
    });
});