import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import {map, catchError, tap } from 'rxjs/operators';

import { Customers } from './customers';


@Injectable({providedIn: 'root'})
export class CustomerService {

 private customerUrl ='https://tcms-customers-d2.herokuapp.com/api/v1/customers'

 httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json'})
 };

  constructor(
    private http: HttpClient) { }

  getCustomers(): Observable<Customers[]> {
    return this.http.get<Customers[]>(this.customerUrl)
  }
  // removeCustomer(); Observable<Customers> {
  //   return this.HTMLOutputElement.remove<Customers[]this.customerUrl)
  // }

  //Save Methods
  addCustomer (variable): Observable<Customers[]> {
    return this.http.post<Customers[]>(this.customerUrl, variable,
    this.httpOptions)
}
}
