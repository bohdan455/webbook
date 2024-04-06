import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-vertical-book-list',
  templateUrl: './vertical-book-list.component.html',
  styleUrl: './vertical-book-list.component.scss'
})
export class VerticalBookListComponent {
  @Input() title: string;

  books: any = new Array(5).fill(undefined)
}
