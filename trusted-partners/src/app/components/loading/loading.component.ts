import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: [ './loading.component.scss']
})
export class LoadingComponent implements OnInit , OnDestroy{

  show:boolean = false;
  laodingSubscription = new Subscription();
  constructor(private loading:LoadingService) { }
  ngOnDestroy(): void {
    this.laodingSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.laodingSubscription = this.loading.loadingListener.subscribe(load=>{
      this.show = load;
    });
  }

}
