export interface Curso {
   nombre: string;
   folio: string;
   descripcion: string;

  }
  
  export let ELEMENT_DATA: Curso[] = [
    {nombre: 'PHYTON', folio: 'P-1000', descripcion: 'Aprende a programar desde cero con el lenguaje de mayor crecimiento en el planeta'},
    {nombre: 'C#', folio: 'C-2000', descripcion: 'Aprende a programar desde cero con el lenguaje de mayor crecimiento en el planeta'},
    {nombre: 'RUBY', folio: 'R-3000', descripcion: 'Aprende a programar desde cero con el lenguaje de mayor crecimiento en el planeta'},
    {nombre: 'VUEJS', folio: 'V-4000', descripcion: 'Aprende a programar desde cero con el lenguaje de mayor crecimiento en el planeta'},
  ];