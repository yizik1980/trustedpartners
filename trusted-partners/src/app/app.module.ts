import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';


import { FormsModule } from '@angular/forms';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { AutocompleteListComponent } from './components/autocomplete-list/autocomplete-list.component';
import { AutocompleteItemComponent } from './components/autocomplete-item/autocomplete-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    AutocompleteListComponent,
    AutocompleteItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
