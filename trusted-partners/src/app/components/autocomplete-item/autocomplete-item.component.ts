import { Component, Input, OnInit } from '@angular/core';
import { Topic } from 'src/app/model/info';

@Component({
  selector: 'app-autocomplete-item',
  templateUrl: './autocomplete-item.component.html',
  styleUrls: ['./autocomplete-item.component.scss']
})
export class AutocompleteItemComponent implements OnInit {
  @Input()
  item:Topic | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
