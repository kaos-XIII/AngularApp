import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html', // Puedes quitarle el url (solo tener template:`codigo HTML`)
  styleUrls: ['./header.component.css']
})
/* Lo que viene por defecto
export class HeaderComponent {

}
*/
export class HeaderComponent implements OnInit {

  constructor() {}

  ngOnInit(): void
  {

  }

}
