import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AgregarAlumnosComponent } from '../agregar-alumnos/agregar-alumnos.component';
import { ELEMENT_DATA } from './i-alumno'


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  displayedColumns: string[] = ['numero', 'correo', 'nombre', 'password','accion'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {  
    
  }

  openDialog(): void {
    let dialog = this.dialog.open(AgregarAlumnosComponent, {
      width: '45%',
      height: '45%',      
    });

    dialog.afterClosed().subscribe(result => {
      console.log('Cerrar');  
    });
  }

  borrarAlumno(id: number) {
    console.log('eliminar');  
  }


}
