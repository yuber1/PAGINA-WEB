import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../shared/producto';
import { RestApiService } from "../shared/rest-api.service";
@Component({
  selector: 'app-productos-crear',
  templateUrl: './productos-crear.component.html',
  styleUrls: ['./productos-crear.component.css']
})
export class ProductosCrearComponent implements OnInit {
  @Input() productoDetalle = { nombre: '', precio: '', descripcion: '' }
  constructor(public restApi: RestApiService, 
    public router: Router) { 
    
  }

  ngOnInit(): void {
  }
  

}
