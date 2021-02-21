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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchBusiness = void 0;
const Video_1 = require("../model/Video");
const axios_1 = __importDefault(require("axios"));
class SearchBusiness {
    constructor() { }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            let response;
            try {
                response = yield axios_1.default.get('https://www.googleapis.com/youtube/v3/search', {
                    params: {
                        key: 'AIzaSyBnG8VpKbAkMY3BhidodntnRs55H0l2gwE',
                        part: 'id',
                        q: 'gato'
                    }
                });
            }
            catch (error) {
                console.error(error);
            }
            console.log('*************************************');
            console.log(response === null || response === void 0 ? void 0 : response.data);
            console.log('*************************************');
            const v = new Video_1.Video(response === null || response === void 0 ? void 0 : response.data.etag);
            return v;
        });
    }
}
exports.SearchBusiness = SearchBusiness;
;
