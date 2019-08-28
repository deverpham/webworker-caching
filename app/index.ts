import * as Express from 'express';
const App: Express.Application = Express();
import * as path from 'path';
import {requestHandler} from './middleware'
App.use(requestHandler);
App.use('/static', Express.static(path.join(__dirname, 'www/assets')))
App.get('/', (req:Express.Request, res:Express.Response) => {
    let IndexFilePath = path.join(__dirname, 'www/views/index.html')
    res.sendFile(IndexFilePath)
})
App.get('/index.html', (req, res) => {
    let IndexFilePath = path.join(__dirname, 'www/views/index.html')
    res.sendFile(IndexFilePath)
})
App.post('/test-cache', (req, res) => {
    res.json({
        success:1
    })
})
App.listen(5000, () => {
});