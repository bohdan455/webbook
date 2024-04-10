import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-book-highlights',
  templateUrl: './book-highlights.component.html',
  styleUrl: './book-highlights.component.scss'
})
export class BookHighlightsComponent {
  @Input() imgSrc: string;
  @Input() name: string;
  @Input() author: string;
  @Input() tag: string;
  @Input() numberOfPages: string;
  @Input() stars: string = "0";
  @Input() views: string = "0";
  @Input() price: string = "Безкоштовно"
  @Input() status: string;
}
