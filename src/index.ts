import dotenv from 'dotenv';
import { AddressInfo } from "net";
import express from "express";
import {searchRouter} from "./routes/searchRouter";

dotenv.config();
const app = express();

app.use(express.json());

app.use("/search", searchRouter);

const server = app.listen(Number(process.env.PORT) || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server running on port: ${address.port}`);
  } else {
    console.error(`Server start failed.`);
  }
});