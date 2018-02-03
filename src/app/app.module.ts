import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { MainComponent } from './main/main.component';
import { DataService } from './service/data.service';
import { HttpService } from './service/http.service';
import { HttpClientModule } from '@angular/common/http';
import { HeroComponent } from './hero/hero.component';
import { InfiniteScrollerDirective } from './infinite-scroller.directive';
import { SearchPipe } from './search.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeroDialogComponent } from './hero-dialog/hero-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeroComponent,
    InfiniteScrollerDirective,
    SearchPipe,
    HeroDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  entryComponents: [HeroDialogComponent],
  providers: [DataService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
