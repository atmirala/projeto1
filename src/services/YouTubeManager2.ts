import axios from "axios";

export class YouTubeManager2 {
    async execute(search:string){
        let collectedResults = 0;
        let results = [];
        let totalResultNumber;
        let nextPageToken = '';
        let closedSearch = false;
        let i;
        let response;
        while(!closedSearch){
            let concatenatedIds = '';
            try {
                let parameters;
                if(nextPageToken.length > 0){
                    parameters = {
                        key: process.env.KEY,
                        part: 'id',
                        q: search,
                        maxResults: 200,
                        type: 'video',
                        pageToken: 'tokenPagina'
                    }
                } else {
                    parameters = {
                        key: process.env.KEY,
                        part: 'id',
                        q: search,
                        maxResults: 200,
                        type: 'video',  
                    }    
                }
           
                response = await axios.get('https://www.googleapis.com/youtube/v3/search', { params: parameters });
               
                nextPageToken = response.data.nextPageToken;
                totalResultNumber = response.data.pageInfo.totalResults;
                for(i = 0; i < response.data.items.length; i++){
                    if(i > 0) {
                        concatenatedIds = concatenatedIds + ',';
                    }
                    concatenatedIds = concatenatedIds + response.data.items[i].id.videoId;
                }  
            } catch (error) {
                console.error(error);
                closedSearch = true;
            }
            try {
                response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
                    params: {
                        key: process.env.KEY,
                        part: 'snippet,contentDetails',
                        id: concatenatedIds
                    }
                });
                for(i = 0; i < response.data.items.length; i++){
                    let id = response.data.items[i].id;
                    let title = response.data.items[i].snippet.title;
                    let description = response.data.items[i].snippet.description;
                    let duration = response.data.items[i].contentDetails.duration;
                    results.push({
                        id: id,
                        titulo: title,
                        descricao: description,
                        duracao: duration
                    });
                    collectedResults++;
                    if((collectedResults > 200) || (collectedResults == totalResultNumber)){
                        closedSearch = true;
                        break;
                    }
                }   
            } catch (error) {
                console.error(error);
                closedSearch = true;
                
            }  
        }
        return {
            resultsNumber: collectedResults,
            results: results
        };
    } 
}