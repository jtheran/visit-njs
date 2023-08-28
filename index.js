import express from "express";
import morgan from "morgan";
import cors from "cors";
import routerMember from "./src/routes/miembros.routes.js"
import routerGuest from "./src/routes/invitados.routes.js"
import routerAuth from "./src/routes/auth.routes.js"

const server = express();
const port = process.env.PORT || 5689;

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());
server.use('/api', routerMember);
server.use('/api', routerGuest);
server.use('/api', routerAuth);
server.get('/', (req,res) => {
    res.send('TODO CORRECTO!!!!!!');
});

server.listen(port, () => {
    console.log('SERVER LISTEN BY PORT: ',port);
});
