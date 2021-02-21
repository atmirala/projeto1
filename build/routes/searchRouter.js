"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchRouter = void 0;
const express_1 = __importDefault(require("express"));
const SearchController_1 = require("../controller/SearchController");
exports.searchRouter = express_1.default.Router();
const searchController = new SearchController_1.SearchController();
exports.searchRouter.get("", searchController.search);
