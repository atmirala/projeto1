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
exports.SearchBusiness = void 0;
const YouTubeManager_1 = require("../services/YouTubeManager");
class SearchBusiness {
    constructor() { }
    execute(search, timeMon, timeThu, timeWed, timeTue, timeFri, timeSat, timeSun) {
        return __awaiter(this, void 0, void 0, function* () {
            let response;
            try {
                const result = yield new YouTubeManager_1.YouTubeManager().execute(search);
                /*console.log(result.items[0].id)*/
                console.log("nextPageToken = " + (result === null || result === void 0 ? void 0 : result.nextPageToken));
                let i;
                for (i = 0; i < result.items.length; i++) {
                    console.log('*** result.items[' + i + ']:');
                    console.log(result.items[i]);
                }
                console.log(result);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    ;
}
exports.SearchBusiness = SearchBusiness;
;
