import express from 'express';
import { vikInfo } from '../model/info.js';
export const apiRouter = express.Router();
const infoRequest = new vikInfo();
apiRouter.get("/:q", (req, res) => {
    var query = req.params.q;
    console.log(query)
    infoRequest.getinfo(query, (err, response, body) => {
        if (err || !response.statusCode || response.statusCode != 200) {
            res.status(500).json(err);
        } else {
            res.status(response.statusCode).json(JSON.parse(body));

        }
    })
});