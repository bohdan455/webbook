import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-catalog-book-list-item',
  templateUrl: './catalog-book-list-item.component.html',
  styleUrl: './catalog-book-list-item.component.scss'
})
export class CatalogBookListItemComponent {
  @Input() imgSrc: string;

  @Input() descriptions: string;
  @Input() name: string;
  @Input() author: string;
  @Input() tag: string;
  @Input() numberOfPages: string;
  @Input() stars: string = "0";
  @Input() views: string = "0";
  @Input() price: string = "Безкоштовно"
}
