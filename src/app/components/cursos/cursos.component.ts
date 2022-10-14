import { Component, OnInit } from '@angular/core';
import { ELEMENT_DATA } from './i-curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

lsCursos = ELEMENT_DATA

  constructor() { }

  ngOnInit(): void {
  }

}
