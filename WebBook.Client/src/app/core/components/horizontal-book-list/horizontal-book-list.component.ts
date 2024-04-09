import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-horizontal-book-list',
  templateUrl: './horizontal-book-list.component.html',
  styleUrl: './horizontal-book-list.component.scss'
})
export class HorizontalBookListComponent {
  @Input() title: string;

  books: any = new Array(5).fill(undefined)
}
