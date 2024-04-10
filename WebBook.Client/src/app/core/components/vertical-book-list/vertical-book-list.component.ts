import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-vertical-book-list',
  templateUrl: './vertical-book-list.component.html',
  styleUrl: './vertical-book-list.component.scss'
})
export class VerticalBookListComponent {
  @Input() title: string = ""
  books: string[] = new Array(3).fill("")
}
