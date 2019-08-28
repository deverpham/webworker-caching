import * as Express from 'express';
export function requestHandler(
    req: Express.Request,
    res: Express.Response,
    next: Express.NextFunction) {
    res.setHeader('cache-control', 'no-cache')
    res.setHeader('Service-Worker-Allowed', '/')
    next();
}