import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class HttpCallInterceptor implements HttpInterceptor {

  constructor(private loading:LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(map(req=>{
      switch(req.type){
        case 4:{
          this.loading.loadingListener.next(false);
          break;
        }
        default:
          this.loading.loadingListener.next(true);
      }
      
      return req
    }));
  }
}
