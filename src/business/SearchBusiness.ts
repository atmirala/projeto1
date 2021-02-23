//import { Video } from "../model/Video";
import { YouTubeManager2 }from "../services/YouTubeManager2"



export class SearchBusiness {
  constructor() {}

  async execute(search: string, timeMon: string, timeThu: string, timeWed: string, timeTue: string, timeFri: string, timeSat: string, timeSun: string): Promise<any> {
    let response;
    try {
      const result = await new YouTubeManager2().execute(search)
      /*console.log(result.items[0].id)*/
      //console.log("nextPageToken = "+result.nextPageToken);
      //let i;
      //for(i = 0; i < result.items.length; i++){
      //  console.log('*** result.items[' + i + ']:');
      //  console.log(result.items[i]);
      //}
      console.log(result)
    } catch (error) {
      console.error(error);
    }

  };
};
