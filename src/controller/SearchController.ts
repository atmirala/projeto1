import { Request, Response } from "express";
import { SearchBusiness } from "../business/SearchBusiness";


export class SearchController {
  async search(req: Request, res: Response) {
    try {
      const search = req.query.q as string;
      const timeMon = req.query.t1 as string;
      const timeThu = req.query.t2 as string;
      const timeWed = req.query.t3 as string;
      const timeTue = req.query.t4 as string;
      const timeFri = req.query.t5 as string;
      const timeSat = req.query.t6 as string;
      const timeSun = req.query.t7 as string;

      const searchBusiness = new SearchBusiness(
      );

      const result = await searchBusiness.execute(
        search, timeMon, timeThu, timeWed, timeTue, timeFri, timeSat, timeSun
      );

      res.status(200).send({ sucess: true, result });
    } catch (error) {
      res.status(400).send({ error });
    }
  }
};
