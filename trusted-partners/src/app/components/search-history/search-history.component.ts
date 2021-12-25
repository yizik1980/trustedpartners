import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { searchHistory } from 'src/app/model/searchHistory';
import { RemoteInfoService } from 'src/app/services/remote-info.service';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.scss']
})
export class SearchHistoryComponent implements OnInit , OnDestroy {
  searchList = new Array<searchHistory>();
  infoSubscription = new Subscription();
  constructor(private infoService:RemoteInfoService) { }
  
  ngOnInit(): void {
    this.searchList = this.infoService.getsearchHistory();
    this.infoSubscription = this.infoService.infoSubject.subscribe(res=>{
      this.searchList = this.infoService.getsearchHistory();
    })
  }
  showSearch(val:string){
    this.infoService.getInfo(val).subscribe()
  }
  
  ngOnDestroy(): void {
    this.infoSubscription.unsubscribe();
  }
}
