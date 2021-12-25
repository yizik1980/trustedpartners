import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loadingListener = new BehaviorSubject<boolean>(false);
  constructor() { }
}
