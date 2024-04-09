import { Component } from '@angular/core';

@Component({
  selector: 'app-new-books',
  templateUrl: './new-books.component.html',
  styleUrl: './new-books.component.scss'
})
export class NewBooksComponent {
    books = new Array(8).fill("")
}
