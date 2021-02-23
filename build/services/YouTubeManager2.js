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
exports.YouTubeManager2 = void 0;
const axios_1 = __importDefault(require("axios"));
class YouTubeManager2 {
    execute(search) {
        return __awaiter(this, void 0, void 0, function* () {
            let resultadosColetados = 0;
            let resultados = [];
            let numeroResultadosTotal;
            let tokenProximaPagina = '';
            let buscaEncerrada = false;
            let i;
            while (!buscaEncerrada) {
                let idsConcatenados = '';
                try {
                    let parametros;
                    if (tokenProximaPagina.length > 0) {
                        parametros = {
                            key: process.env.KEY,
                            part: 'id',
                            q: search,
                            maxResults: 50,
                            type: 'video',
                            pageToken: 'tokenPagina'
                        };
                    }
                    else {
                        parametros = {
                            key: process.env.KEY,
                            part: 'id',
                            q: search,
                            maxResults: 50,
                            type: 'video',
                        };
                    }
                    const response = yield axios_1.default.get('https://www.googleapis.com/youtube/v3/search', { params: parametros });
                    tokenProximaPagina = response.data.nextPageToken;
                    numeroResultadosTotal = response.data.pageInfo.totalResults;
                    for (i = 0; i < response.data.items.length; i++) {
                        if (i > 0) {
                            idsConcatenados = idsConcatenados + ',';
                        }
                        idsConcatenados = idsConcatenados + response.data.items[i].id.videoId;
                    }
                }
                catch (error) {
                    console.error(error);
                }
                try {
                    const response = yield axios_1.default.get('https://www.googleapis.com/youtube/v3/videos', {
                        params: {
                            key: process.env.KEY,
                            part: 'snippet,contentDetails',
                            id: idsConcatenados
                        }
                    });
                    for (i = 0; i < response.data.items.length; i++) {
                        let id = response.data.items[i].id;
                        let titulo = response.data.items[i].snippet.title;
                        let descricao = response.data.items[i].snippet.description;
                        let duracao = response.data.items[i].contentDetails.duration;
                        resultados.push({
                            id: id,
                            titulo: titulo,
                            descricao: descricao,
                            duracao: duracao
                        });
                        resultadosColetados++;
                        if ((resultadosColetados == 200) || (resultadosColetados == numeroResultadosTotal)) {
                            buscaEncerrada = true;
                            break;
                        }
                    }
                }
                catch (error) {
                    console.error(error);
                }
            }
            return {
                numeroResultados: resultadosColetados,
                resultados: resultados
            };
        });
    }
}
exports.YouTubeManager2 = YouTubeManager2;
