import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from '../shared/producto';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  apiURL = 'http://localhost:8080/apiadmin/';
  constructor(private http: HttpClient) { }
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 
  getProductos(): Observable<Producto> {
    return this.http.get<Producto>(this.apiURL + '/productos')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  // HttpClient API get() method => Fetch employee
  getProducto(id:number): Observable<Producto> {
    return this.http.get<Producto>(this.apiURL + '/productos/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
    // HttpClient API post() method => Create employee
  createProducto(Producto:Producto): Observable<Producto> {
    return this.http.post<Producto>(this.apiURL + '/productos', JSON.stringify(Producto), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  
  // HttpClient API put() method => Update employee
  updateProducto(id:number,producto:Producto): Observable<Producto> {
    return this.http.put<Producto>(this.apiURL + '/productos/' + id, JSON.stringify(Producto), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  handleError(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }

}

