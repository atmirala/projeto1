"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const searchRouter_1 = require("./routes/searchRouter");
dotenv_1.default.config();
const app = express_1.default();
app.use(express_1.default.json());
app.use("/search", searchRouter_1.searchRouter);
const server = app.listen(Number(process.env.PORT) || 3003, () => {
    if (server) {
        const address = server.address();
        console.log(`Server running on port: ${address.port}`);
    }
    else {
        console.error(`Server start failed.`);
    }
});
