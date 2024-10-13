import { Request, Response } from "express";
export const newUser = (req: Request, res: Response) => { 
    const {body} = req;

    res.json({
        msg: 'newUser',
        body
    });
}

export const loginUser = (req: Request, res: Response) => { 
    const {body} = req;
    res.json({
        msg: 'Iniciando sesion',
        body
    });
}