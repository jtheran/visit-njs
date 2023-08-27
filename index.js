import express from "express";
import morgan from "morgan";
import cors from "cors";
import routerMember from "./src/routes/miembros.routes.js"

const server = express();
const port = process.env.PORT || 5689;

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());
server.use('/api', routerMember);
server.get('/', (req,res) => {
    res.send('TODO CORRECTO!!!!!!');
});

server.listen(port, () => {
    console.log('SERVER LISTEN BY PORT: ',port);
});
