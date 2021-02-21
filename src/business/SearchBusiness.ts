import { Video } from "../model/Video";
import axios from "axios";


export class SearchBusiness {
  constructor() {}

  async execute(input: string): Promise<any> {
    let response;
    try {
      response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: 'AIzaSyBnG8VpKbAkMY3BhidodntnRs55H0l2gwE',
          part: 'id',
          q: 'gato'
        }
      });
      
    } catch (error) {
      console.error(error);
    }

    console.log('*************************************');
    console.log(response?.data);
    console.log('*************************************');

    const v = new Video(response?.data.etag);
    return v;
  }
};

