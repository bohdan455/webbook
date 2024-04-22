import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-book-information',
  templateUrl: './book-information.component.html',
  styleUrl: './book-information.component.scss'
})
export class BookInformationComponent {
  imgSrc: string = "/assets/img/book-image.png";
  name: string = "Пригоди віктора";
  author: string = "Невідомий автор";
  numberOfPages: string = "124";
  stars: string = "124";
  views: string = "1345";
  price: string = "Безкоштовно"
  status: string = "Завершено";
  genre: string = "Наукова фантастика"
  annotation: string = "Ця книга - це подорож у світ фантастичних можливостей та нескінченних  ідей. Відкрийте для себе унікальний світ, де межа між реальністю та  уявою розтанула, і кожна сторінка приносить нові відкриття та враження.  Це історія про те, як слова оживають на сторінках, а читачі опиняються у  центрі подій, які можуть змінити все."
}
