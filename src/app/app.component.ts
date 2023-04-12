import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent { // Propiedades u metodos.
  title = 'AngularApp';

  getSaludo(): void
  {
    console.log("Hola");
  }
}
