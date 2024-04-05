import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {style} from "@angular/animations";

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html',
  styleUrl: './main-button.component.scss'
})
export class MainButtonComponent{
  @Input() height: string;
  @Input() width: string;
  @Input() fontSize: string
  @Output() action = new EventEmitter()
  protected readonly style = style;
}
