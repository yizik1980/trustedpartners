import { AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { debounceTime, filter, fromEvent, mergeMap } from 'rxjs';
import { RemoteInfoService } from 'src/app/services/remote-info.service';
import  info  from '../../model/info';
@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit ,AfterViewInit{
  @ViewChild('searchField') searchField: ElementRef = new ElementRef(null);
  info:info | undefined;
  constructor(private remoteInfo:RemoteInfoService) { }
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    if(this.searchField){
      fromEvent<KeyboardEvent>(this.searchField.nativeElement,'keydown')
      .pipe(debounceTime(2000))
       .pipe(mergeMap(keyEvent=>{
        var txtVal = (keyEvent.target as HTMLInputElement).value;
        console.log(txtVal);
         return this.remoteInfo.getInfo(txtVal)
       })).subscribe(result=>{
         this.info = result;
         console.log(result);
       });
    }
  }


}
