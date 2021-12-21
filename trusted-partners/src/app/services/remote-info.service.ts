import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import  info  from '../model/info';

@Injectable({
  providedIn: 'root'
})
export class RemoteInfoService {

  constructor(private http:HttpClient) { }
  getInfo(text:string):Observable<info>{
    return this.http.get<info>(environment.remoteUrl+`?q=${text}&format=json`)
  }
}
