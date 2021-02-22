import axios from "axios";

export class YouTubeManager {
    async execute (){
        try {
            const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
              params: {
                key: process.env.KEY,
                part: 'snippet',
                q: 'gato'
              }

            });
            return response.data;
          } catch (error) {
            console.error(error);
          }
    }
  


}