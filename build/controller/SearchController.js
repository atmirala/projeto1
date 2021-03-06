"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchController = void 0;
const SearchBusiness_1 = require("../business/SearchBusiness");
class SearchController {
    search(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const search = req.query.q;
                const timeMon = req.query.t1;
                const timeThu = req.query.t2;
                const timeWed = req.query.t3;
                const timeTue = req.query.t4;
                const timeFri = req.query.t5;
                const timeSat = req.query.t6;
                const timeSun = req.query.t7;
                const searchBusiness = new SearchBusiness_1.SearchBusiness();
                const result = yield searchBusiness.execute(search, timeMon, timeThu, timeWed, timeTue, timeFri, timeSat, timeSun);
                res.status(200).send({ sucess: true, result });
            }
            catch (error) {
                res.status(400).send({ error });
            }
        });
    }
}
exports.SearchController = SearchController;
;
