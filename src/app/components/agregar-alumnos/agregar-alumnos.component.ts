import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-agregar-alumnos',
  templateUrl: './agregar-alumnos.component.html',
  styleUrls: ['./agregar-alumnos.component.css']
})
export class AgregarAlumnosComponent implements OnInit {

  formAlumno: FormGroup = this.fb.group(
    {
      correo: ['',[Validators.required]],
      nombre:[null,Validators.required],
      contrasenia: ['',[Validators.required]]  
    }
  )
  constructor(
    public dialogRef: MatDialogRef<AgregarAlumnosComponent>,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
  }

  guardarAlumno() {
    this.dialogRef.close(this.formAlumno.value)
  }

}
