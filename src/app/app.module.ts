import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CountriesFilterPipe } from '../app/pipes/countriesFilter.pipe';
import { CountriesOrderPipe } from '../app/pipes/CountriesOrder.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { from } from 'rxjs';
import { ModalCountryComponent } from './components/modal-country/modal-country.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountriesFilterPipe,
    CountriesOrderPipe,
    ModalCountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
