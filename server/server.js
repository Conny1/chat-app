import express from "express";
import { Server } from "socket.io";
import http from "http";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

server.listen(4500, () => {
  console.log("Server is up and running");
});
