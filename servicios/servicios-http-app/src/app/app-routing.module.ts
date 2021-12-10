import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosCrearComponent } from './productos-crear/productos-crear.component';
import { ProductosEditarComponent } from './productos-editar/productos-editar.component';
import { ProductosListComponent } from './productos-list/productos-list.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'crear-producto' },
  { path: 'crear-producto', component: ProductosCrearComponent },
  { path: 'editar-producto', component: ProductosEditarComponent },
  { path: 'lista-producto', component: ProductosListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
