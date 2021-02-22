import axios from "axios";

export class YouTubeManager {
    async execute(search:string){
        try {
            const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
              params: {
                key: process.env.KEY,
                part: 'snippet',
                q: search, 
                maxResults: 50,
                type: 'video'
              }

            });
            return response.data;
          } catch (error) {
            console.error(error);
          }
    }
  


}