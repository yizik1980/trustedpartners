//const request = require("request");
import request from 'request';
export class vikInfo {
    url = "";
    constructor(url) {
        this.url = url || "https://api.duckduckgo.com/";
    }
    getinfo(query, callBack) {
        let url = `${this.url}?q=${query}&format=json`;
        console.log(url);
        return request.get(url, callBack);
    }
}