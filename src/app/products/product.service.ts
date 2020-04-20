import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsUrl = 'http://localhost:5000/api/product';

  constructor(private http: HttpClient) {}

  product: Product;

  onGetProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl).pipe(
      tap((data) => console.log('product' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  onGetProduct(id: number): Observable<Product> {
    if (id === 0) {
      return of(this.initializeProduct());
    }
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      tap((data) => console.log('getProduct: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );

    /* const productUrl = `${this.productsUrl}/${id} `;
    return this.http.get<IProduct[]>(productUrl).pipe(
      tap( data => console.log(`stringify ${JSON.stringify(data)}`))
    ); */
  }
  onCreateProduct(product: Product): Observable<Product> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    product.productId = null;
    return this.http
      .post<Product>(this.productsUrl, product, { headers })
      .pipe(
        tap((data) => console.log('createProduct: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  onDeleteProduct(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.productsUrl}/${id}`;
    return this.http
      .delete<Product>(url, { headers })
      .pipe(
        tap((data) => console.log('deleteProduct: ' + id)),
        catchError(this.handleError)
      );
  }

  onUpdateProduct(product: Product): Observable<Product> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.productsUrl}/${product.productId}`;
    return this.http
      .put<Product>(url, product, { headers })
      .pipe(
        tap(() => console.log('updateProduct: ' + product.productId)),
        // Return the product on an update
        map(() => product),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  private initializeProduct(): Product {
    // Return an initialized object
    return {
      productId: 0,
      productName: null,
      productCode: null,
      tags: [''],
      releaseDate: null,
      price: null,
      description: null,
      starRating: null,
      imageUrl: null,
    };
  }
}
