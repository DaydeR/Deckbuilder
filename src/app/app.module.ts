import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardFetcherComponent } from './card-fetcher/card-fetcher.component';
import { DecklistComponent } from './decklist/decklist.component';
import { CardViewerComponent } from './card-viewer/card-viewer.component';
import { StatTrackerComponent } from './stat-tracker/stat-tracker.component';

@NgModule({
  declarations: [
    AppComponent,
    CardFetcherComponent,
    DecklistComponent,
    CardViewerComponent,
    StatTrackerComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
    AppRoutingModule,
	HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
