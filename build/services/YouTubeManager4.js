"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YouTubeManager2 = void 0;
const axios_1 = __importDefault(require("axios"));
class YouTubeManager2 {
    execute(search) {
        let resultadosColetados = 0;
        let resultados = [];
        let resposta;
        let numeroResultadosTotal;
        let tokenProximaPagina = '';
        let buscaEncerrada = false;
        let i;
        while (!buscaEncerrada) {
            let tokenProximaPagina;
            let numeroResultadosTotal;
            let idsConcatenados = '';
            try {
                let parametros;
                if (tokenPagina.length > 0) {
                    parametros = {
                        key: process.env.KEY,
                        part: 'id',
                        q: termoBusca,
                        maxResults: 2,
                        type: 'video',
                        pageToken: 'tokenPagina'
                    };
                }
                else {
                    parametros = {
                        key: process.env.KEY,
                        part: 'id',
                        q: termoBusca,
                        maxResults: 2,
                        type: 'video',
                    };
                }
                ;
                const response = yield axios_1.default.get('https://www.googleapis.com/youtube/v3/search', { params: parametros });
                tokenProximaPagina = response.data.nextPageToken;
                numeroResultadosTotal = response.data.pageInfo.totalResults;
                let i;
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
            ;
            let numeroResultadosDestaBusca;
            let resultados = [];
            try {
                const response = yield axios_1.default.get('https://www.googleapis.com/youtube/v3/videos', {
                    params: {
                        key: process.env.KEY,
                        part: 'snippet,contentDetails',
                        id: idsConcatenados
                    }
                });
                numeroResultadosDestaBusca = response.data.items.length;
                let i;
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
                }
                ;
            }
            catch (error) {
                console.error(error);
            }
            ;
            return {
                numeroResultadosDestaBusca: numeroResultadosDestaBusca,
                tokenProximaPagina: tokenProximaPagina,
                numeroResultadosTotal: numeroResultadosTotal,
                resultados: resultados
            };
        }
        ;
        numeroResultadosTotal = resposta.numeroResultadosTotal;
        tokenProximaPagina = resposta.tokenProximaPagina;
        for (i = 0; i < resposta.resultados.length; i++) {
            resultadosColetados++;
            resultados.push(resposta.resultados[i]);
            if ((resultadosColetados == 200) || (resultadosColetados == numeroResultadosTotal)) {
                buscaEncerrada = true;
                break;
            }
        }
        ;
    }
}
exports.YouTubeManager2 = YouTubeManager2;
return {
    numeroResultados: resultadosColetados,
    resultados: resultados
};
async;
chamaServicoBusca(termoBusca, string, tokenPagina, string);
{
    let tokenProximaPagina;
    let numeroResultadosTotal;
    let idsConcatenados = '';
    try {
        let parametros;
        if (tokenPagina.length > 0) {
            parametros = {
                key: process.env.KEY,
                part: 'id',
                q: termoBusca,
                maxResults: 2,
                type: 'video',
                pageToken: 'tokenPagina'
            };
        }
        else {
            parametros = {
                key: process.env.KEY,
                part: 'id',
                q: termoBusca,
                maxResults: 2,
                type: 'video',
            };
        }
        const response = await axios_1.default.get('https://www.googleapis.com/youtube/v3/search', { params: parametros });
        tokenProximaPagina = response.data.nextPageToken;
        numeroResultadosTotal = response.data.pageInfo.totalResults;
        let i;
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
    let numeroResultadosDestaBusca;
    let resultados = [];
    try {
        const response = await axios_1.default.get('https://www.googleapis.com/youtube/v3/videos', {
            params: {
                key: process.env.KEY,
                part: 'snippet,contentDetails',
                id: idsConcatenados
            }
        });
        numeroResultadosDestaBusca = response.data.items.length;
        let i;
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
        }
    }
    catch (error) {
        console.error(error);
    }
    return {
        numeroResultadosDestaBusca: numeroResultadosDestaBusca,
        tokenProximaPagina: tokenProximaPagina,
        numeroResultadosTotal: numeroResultadosTotal,
        resultados: resultados
    };
}
