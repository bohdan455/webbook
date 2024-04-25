import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-comments-item',
  templateUrl: './comments-item.component.html',
  styleUrl: './comments-item.component.scss'
})
export class CommentsItemComponent {
  @Input() username: string;
  @Input() time: string;
  @Input() text: string
}
