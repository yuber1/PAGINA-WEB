import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  calcularAreaTriangulo(base:number,altura:number):number{
    return base*altura/2;
  }
  figura:any={
    tipo:'Rectangulo',
    base:4,
    altura:16,
    imagen:'assets/rectangulo.jpg'
  }
}
