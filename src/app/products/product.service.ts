import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IProduct } from './product';

// tslint:disable-next-line:class-name
class productItem{
  productId: number;
  productName: string;
  releaseDate: string;
  description: string;
  price: number;
  starRating: number;
  imageUrl: string;
  productCode: string;
  constructor(
    productId: number,
    productName: string,
    productCode: string,
    releaseDate: string,
    description: string,
    price: number,
    starRating: number,
    imageUrl: string
  ){}
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'http://localhost:5000/api/product';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productsUrl).pipe(
      tap(data => console.log('product' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getProduct(id: number): Observable<productItem[]> {
    const productUrl = `${this.productsUrl}/${id} `;
    const data = this.http.get<productItem[]>(productUrl);
    console.log(data);
    return data;

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
}
