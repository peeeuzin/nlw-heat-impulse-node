import 'dotenv/config';
import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';

// Routers
import signin from './routers/signin';
import github from './routers/github';
import auth from './routers/auth';
import messages from './routers/messages';
import profile from './routers/profile';

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: '*',
    },
});

app.use(express.json());

app.use('/signin', signin);
app.use('/github', github);
app.use('/authenticate', auth);
app.use('/messages', messages);
app.use('/profile', profile);

export { server, io };
