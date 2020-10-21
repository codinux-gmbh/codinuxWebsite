import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ProductsComponent } from './components/products/products.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductsComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
