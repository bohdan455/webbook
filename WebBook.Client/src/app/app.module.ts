import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { BookInformationComponent } from './pages/book-information/book-information.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { PopularTagsComponent } from './core/components/popular-tags/popular-tags.component';
import { TopBooksComponent } from './core/components/top-books/top-books.component';
import { TrendingBooksComponent } from './core/components/trending-books/trending-books.component';
import { NewBooksComponent } from './core/components/new-books/new-books.component';
import { YourLibraryComponent } from './core/components/your-library/your-library.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CatalogComponent,
    BookInformationComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    PopularTagsComponent,
    TopBooksComponent,
    TrendingBooksComponent,
    NewBooksComponent,
    YourLibraryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
