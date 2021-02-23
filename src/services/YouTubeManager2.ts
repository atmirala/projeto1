import axios from "axios";

export class YouTubeManager2 {
    async execute(search:string){
        let resultadosColetados = 0;
        let resultados = [];
        let numeroResultadosTotal;
        let tokenProximaPagina = '';
        let buscaEncerrada = false;
        let i;
        while(!buscaEncerrada){
            let idsConcatenados = '';
            try {
                let parametros;
                if(tokenProximaPagina.length > 0){
                    parametros = {
                        key: process.env.KEY,
                        part: 'id',
                        q: search,
                        maxResults: 50,
                        type: 'video',
                        pageToken: 'tokenPagina'
                    }
                } else {
                    parametros = {
                        key: process.env.KEY,
                        part: 'id',
                        q: search,
                        maxResults: 50,
                        type: 'video',  
                    }    
                }
           
                const response = await axios.get('https://www.googleapis.com/youtube/v3/search', { params: parametros });
               
                tokenProximaPagina = response.data.nextPageToken;
                numeroResultadosTotal = response.data.pageInfo.totalResults;
                for(i = 0; i < response.data.items.length; i++){
                    if(i > 0) {
                        idsConcatenados = idsConcatenados + ',';
                    }
                    idsConcatenados = idsConcatenados + response.data.items[i].id.videoId;
                }  
            } catch (error) {
                console.error(error);
            }
            try {
                const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
                    params: {
                        key: process.env.KEY,
                        part: 'snippet,contentDetails',
                        id: idsConcatenados
                    }
                });
                for(i = 0; i < response.data.items.length; i++){
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
                    if((resultadosColetados == 200) || (resultadosColetados == numeroResultadosTotal)){
                        buscaEncerrada = true;
                        break;
                    }
                }   
            } catch (error) {
                console.error(error);
            }  
        }
        return {
            numeroResultados: resultadosColetados,
            resultados: resultados
        };
    } 
}