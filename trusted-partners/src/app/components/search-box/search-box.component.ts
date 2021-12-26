import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { debounce, debounceTime, EMPTY, filter, fromEvent, mergeMap, Subscription, timer } from 'rxjs';
import { RemoteInfoService } from 'src/app/services/remote-info.service';
import info from '../../model/info';
@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('searchField') searchField: ElementRef = new ElementRef(null);
  info: info | undefined;
  errorMessage = '';
  keySubscription = new Subscription();
  infoSubscription = new Subscription();
  constructor(private remoteInfo: RemoteInfoService) { }

  ngOnInit(): void {
    this.infoSubscription = this.remoteInfo.infoSubject.subscribe(infoRes => {
      this.info = infoRes;
      this.errorMessage = infoRes.RelatedTopics.length > 0 ? '' : 'nothing  to found on ' + infoRes.Definition
    })
  }
  ngAfterViewInit(): void {
    if (this.searchField) {
      this.keySubscription = fromEvent<KeyboardEvent>(this.searchField.nativeElement, 'keydown')
        .pipe(debounce(ev => {
          return ev.key === 'Enter' ? timer(0):timer(5000);
        }))
        .pipe(mergeMap(keyEvent => {
          var txtVal = (keyEvent.target as HTMLInputElement).value;
          return this.remoteInfo.getInfo(txtVal)
        })).subscribe(res => { }, err => {
          this.errorMessage = err.message;
        });
    }
  }
  ngOnDestroy(): void {
    this.keySubscription.unsubscribe();
    this.infoSubscription.unsubscribe();
  }

}
