import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PartieComponent } from './components/partie/partie.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { PartieDetailsComponent } from './components/partie-details/partie-details.component';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [AppComponent, PartieComponent, HomeComponent, PartieDetailsComponent, DetailsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
