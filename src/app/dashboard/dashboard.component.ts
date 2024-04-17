import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  showMenu: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }


  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  cerrarSesion() {
    // Lógica para cerrar sesión
    console.log("Cerrando sesión...");
  }
}
