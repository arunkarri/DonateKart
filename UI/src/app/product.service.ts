import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiRoot: any = 'https://api.exchangeratesapi.io/latest?base=';
  constructor(private http: HttpClient) { }


  search(term: string): Observable<any> {
    const apiURL = `${this.apiRoot}${term}`;
    return this.http.get(apiURL);
   }
  }
