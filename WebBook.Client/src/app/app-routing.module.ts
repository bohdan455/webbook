import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {CatalogComponent} from "./pages/catalog/catalog.component";
import {BookInformationComponent} from "./pages/book-information/book-information.component";

const routes: Routes = [
  {path: "book/:id", component: BookInformationComponent},
  {path:"catalog", component: CatalogComponent},
  {path:"", component: MainPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
