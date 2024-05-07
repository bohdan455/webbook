import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  hidden: boolean = false;

  hideElements(){
    this.hidden = !this.hidden;
    console.log(this.hidden)
  }
}
