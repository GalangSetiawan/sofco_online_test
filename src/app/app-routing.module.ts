import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './component/home/home.component';
import { CatalogComponent } from './component/catalog/catalog.component';
import { ShoplistComponent } from './component/shoplist/shoplist.component';
import { DetailbookComponent } from './component/detailbook/detailbook.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'catalog', component: CatalogComponent }, 
  { path: 'shoplist', component: ShoplistComponent },
  { path: 'detail', component: DetailbookComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
