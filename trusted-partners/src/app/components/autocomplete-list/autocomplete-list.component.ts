import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RelatedTopic, Topic } from 'src/app/model/info';

@Component({
  selector: 'app-autocomplete-list',
  templateUrl: './autocomplete-list.component.html',
  styleUrls: ['./autocomplete-list.component.scss']
})
export class AutocompleteListComponent implements OnChanges {
  @Input()
  relatedTopics: RelatedTopic[] | undefined;
  mainTopics:Topic[] | undefined;
  subTopics:{ [x: string]:  Topic[]; }[] | undefined;
  constructor() { }

  ngOnChanges(): void {
    this.mainTopics = this.relatedTopics?.filter(item=>item.FirstURL);
    this.subTopics = this.relatedTopics?.filter(item=>item.Name).map(item=>{
      return {
        [item.Name]:item.Topics
      }
    })
    debugger;
    console.log(this.subTopics);
  }

}
