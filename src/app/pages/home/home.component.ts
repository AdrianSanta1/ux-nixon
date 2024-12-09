import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dropdownVisible: boolean = false; // Controla la visibilidad del menú desplegable

  // Muestra el menú desplegable
  showDropdown(): void {
    this.dropdownVisible = true;
  }

  // Oculta el menú desplegable
  hideDropdown(): void {
    this.dropdownVisible = false;
  }
}
