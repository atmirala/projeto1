import { Video } from "../model/Video";

export class SearchBusiness {
  constructor() {}

  async execute(input: string): Promise<any> {
    const v = new Video('abcd');
    return v;
  }
};