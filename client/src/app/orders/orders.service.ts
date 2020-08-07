import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUserOrders() {
    return this.http.get(this.baseUrl + 'orders');
  }

  getOrderDetails(id: number) {
    return this.http.get(this.baseUrl + 'orders/' + id);
  }
}
