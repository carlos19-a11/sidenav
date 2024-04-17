import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  fileName: string = '';
  files: File[] = [];
  showMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onFilesSelected(event: any) {
    const fileList: FileList = event.target.files;
    for (let i = 0; i < fileList.length; i++) {
      this.files.push(fileList.item(i)!);
    }
    console.log('Archivos seleccionados:', this.files);
  }

  uploadFiles() {
    if (this.files.length === 0) {
      alert('Debe seleccionar al menos un archivo PDF antes de subirlo.');
      return;
    }

    // Aquí puedes implementar la lógica para subir los archivos,
    // utilizando el nombre ingresado por el usuario y los archivos seleccionados.
    console.log('Nombre del archivo:', this.fileName);
    console.log('Archivos subidos:', this.files);
    // Lógica para subir los archivos al servidor o realizar otras operaciones.
    // Después de subir los archivos, vaciamos el array de archivos para borrarlos de la lista
    this.files = [];
  }


  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  cerrarSesion() {
    // Lógica para cerrar sesión
    console.log("Cerrando sesión...");
  }

}

