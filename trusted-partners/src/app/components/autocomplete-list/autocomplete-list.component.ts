import { Component, Input, OnInit } from '@angular/core';
import { RelatedTopic } from 'src/app/model/info';

@Component({
  selector: 'app-autocomplete-list',
  templateUrl: './autocomplete-list.component.html',
  styleUrls: ['./autocomplete-list.component.scss']
})
export class AutocompleteListComponent implements OnInit {
  @Input()
  relatedTopics = new Array<RelatedTopic>();
  constructor() { }

  ngOnInit(): void {
  }

}
