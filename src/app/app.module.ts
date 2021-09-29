import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { LinkListItemComponent } from './features/dashboard/link-list-item/link-list-item.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { ImpressumComponent } from './features/impressum/impressum.component';
import { FlexLayoutModule } from "@angular/flex-layout";


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LinkListItemComponent,
    ImpressumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
