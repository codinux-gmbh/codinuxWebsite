import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductsComponent },
      { path: 'about', component: AboutComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    FooterComponent,
    ProductsComponent,
    AboutComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
