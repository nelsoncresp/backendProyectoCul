import { Request, Response } from "express";
export const getProducts = (req: Request, res: Response) => { // (0, res) => {
    
   res.json({
       msg: 'getProducts'
   })
}
