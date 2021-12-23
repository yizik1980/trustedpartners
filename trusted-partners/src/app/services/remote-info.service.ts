import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import  info  from '../model/info';
import { searchHistory } from '../model/searchHistory';

@Injectable({
  providedIn: 'root'
})
export class RemoteInfoService {
  infoSubject = new Subject<info>();
  constructor(private http:HttpClient) { }

  getInfo(text:string):Observable<info>{
    return text.length>1
    ? this.http.get<info>(environment.remoteUrl+`${text}`)
    .pipe(tap(res=>{
        this.setHistory(text);
        this.infoSubject.next(res);
    }))
    :of({} as info);
  }
  setHistory(definition:string){
    let search = localStorage.getItem('sreach-history');
    if(!search){
      search = "[]";
    }
    let searchesHistory = JSON.parse(search) as Array<searchHistory>;
    if(!searchesHistory.find(item=>item.definition == definition)){
      searchesHistory = [...searchesHistory,{id:searchesHistory.length,definition:definition}]
      localStorage.setItem('sreach-history',JSON.stringify(searchesHistory));
    }
    return searchesHistory;
  }
  getsearchHistory():Array<searchHistory>{
    let search = localStorage.getItem('sreach-history');
    if(!search){
      search = "[]";
    }
    return JSON.parse(search) as Array<searchHistory>;
  }
}
