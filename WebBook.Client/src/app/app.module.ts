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
import { NewBooksComponent } from './core/components/new-books/new-books.component';
import { CatalogBookListComponent } from './core/components/catalog-book-list/catalog-book-list.component';
import { CatalogBookListItemComponent } from './core/components/catalog-book-list-item/catalog-book-list-item.component';
import { CatalogFiltrationComponent } from './core/components/catalog-filtration/catalog-filtration.component';
import { CatalogBookListPaggingComponent } from './core/components/catalog-book-list-pagging/catalog-book-list-pagging.component';
import { CommentsComponent } from './core/components/comments/comments.component';
import { CommentsItemComponent } from './core/components/comments-item/comments-item.component';
import { MainButtonComponent } from './core/components/main-button/main-button.component';
import { MainPickerComponent } from './core/components/main-picker/main-picker.component';
import { BookShortInformationComponent } from './core/components/book-short-information/book-short-information.component';
import { HorizontalBookListComponent } from './core/components/horizontal-book-list/horizontal-book-list.component';
import { VerticalBookListComponent } from './core/components/vertical-book-list/vertical-book-list.component';
import { BookHighlightsComponent } from './core/components/book-highlights/book-highlights.component';

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
    NewBooksComponent,
    CatalogBookListComponent,
    CatalogBookListItemComponent,
    CatalogFiltrationComponent,
    CatalogBookListPaggingComponent,
    CommentsComponent,
    CommentsItemComponent,
    MainButtonComponent,
    MainPickerComponent,
    BookShortInformationComponent,
    HorizontalBookListComponent,
    VerticalBookListComponent,
    BookHighlightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
