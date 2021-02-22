import { Video } from "../model/Video";
import { YouTubeManager }from "../services/YouTubeManager"



export class SearchBusiness {
  constructor() {}

  async execute(search: string, timeMon: string, timeThu: string, timeWed: string, timeTue: string, timeFri: string, timeSat: string, timeSun: string): Promise<any> {
    let response;
    try {
      const result = await new YouTubeManager().execute()
      console.log(result.items[0].id)
    } catch (error) {
      console.error(error);
    }

  }
};
