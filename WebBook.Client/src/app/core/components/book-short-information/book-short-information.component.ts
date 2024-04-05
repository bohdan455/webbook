import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-book-short-information',
  templateUrl: './book-short-information.component.html',
  styleUrl: './book-short-information.component.scss'
})
export class BookShortInformationComponent {
  @Input() imgSrc: string;
  @Input() name: string;
  @Input() author: string;
  @Input() genre: string;
  @Input() numberOfPages: string;
}
