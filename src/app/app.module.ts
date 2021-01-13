import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { CatalogComponent } from './component/catalog/catalog.component';
import { ShoplistComponent } from './component/shoplist/shoplist.component';
import { HeaderComponent } from './component/header/header.component';
import { DetailbookComponent } from './component/detailbook/detailbook.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogComponent,
    ShoplistComponent,
    HeaderComponent,
    DetailbookComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
