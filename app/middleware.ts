import * as Express from 'express';
export function requestHandler(
    req: Express.Request, 
    res: Express.Response, 
    next:Express.NextFunction) {
        console.log(req.path, 'loading')
        res.setHeader('cache-control', ',immutable')
    next();
}