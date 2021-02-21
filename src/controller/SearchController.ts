import { Request, Response } from "express";
import { SearchBusiness } from "../business/SearchBusiness";


export class SearchController {
  async search(req: Request, res: Response) {
    try {
      const input = req.query.q as string;
      const searchBusiness = new SearchBusiness(
      );

      const result = await searchBusiness.execute(
        input
      );

      res.status(200).send({ sucess: true, result });
    } catch (error) {
      res.status(400).send({ error });
    }
  }
};
