import { Component, OnInit } from '@angular/core';
import { searchHistory } from 'src/app/model/searchHistory';
import { RemoteInfoService } from 'src/app/services/remote-info.service';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.scss']
})
export class SearchHistoryComponent implements OnInit {
  searchList = new Array<searchHistory>();
  constructor(private infoService:RemoteInfoService) { }

  ngOnInit(): void {
    this.searchList = this.infoService.getsearchHistory();
  }
  showSearch(val:string){
    this.infoService.getInfo(val).subscribe()
  }

}
