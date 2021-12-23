import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RelatedTopic, Topic } from 'src/app/model/info';
import { pages } from 'src/app/model/pages';

@Component({
  selector: 'app-autocomplete-list',
  templateUrl: './autocomplete-list.component.html',
  styleUrls: ['./autocomplete-list.component.scss']
})
export class AutocompleteListComponent implements OnChanges {
  @Input()
  relatedTopics: RelatedTopic[] | undefined;
  mainTopics:Topic[] | undefined;
  subTopics:RelatedTopic[] | undefined;
  mainPage:pages = {
    pageSize : 4,
    page : 1,
    mainLength : 0
  };


  constructor() { }

  ngOnChanges(): void {
    if(this.relatedTopics && this.relatedTopics.length>0){
      this.mainTopics = this.relatedTopics?.filter(item=>item.FirstURL);
      this.mainPage.mainLength = this.mainTopics.length;
      this.subTopics = this.relatedTopics?.filter(item=>item.Name);
    }
  }

}
