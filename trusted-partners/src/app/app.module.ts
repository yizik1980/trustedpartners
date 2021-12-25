import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';


import { FormsModule } from '@angular/forms';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { AutocompleteListComponent } from './components/autocomplete-list/autocomplete-list.component';
import { AutocompleteItemComponent } from './components/autocomplete-item/autocomplete-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchHistoryComponent } from './components/search-history/search-history.component';
import { LoadingComponent } from './components/loading/loading.component';
import { HttpCallInterceptor } from './interceptors/http-call.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    AutocompleteListComponent,
    AutocompleteItemComponent,
    SearchHistoryComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpCallInterceptor,
      multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
