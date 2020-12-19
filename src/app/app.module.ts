import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'

import { NgbModule } from "@ng-bootstrap/ng-bootstrap"


import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { EpcQrCodeGeneratorComponent } from './components/epc-qr-code-generator/epc-qr-code-generator.component';
import { DownloadsComponent } from './components/downloads/downloads.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: ProductsComponent },
      { path: 'epcqrcode', component: EpcQrCodeGeneratorComponent },
      { path: 'downloads', component: DownloadsComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'about', component: AboutComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    FooterComponent,
    ProductsComponent,
    DownloadsComponent,
    EpcQrCodeGeneratorComponent,
    ContactComponent,
    AboutComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
