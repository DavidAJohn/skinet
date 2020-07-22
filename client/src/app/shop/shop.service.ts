import { Brand } from './../shared/models/brand';
import { ProductType } from './../shared/models/productType';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPagination } from '../shared/models/pagination';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) {
  }

  getProducts() {
    return this.http.get<IPagination>(this.baseUrl + 'products');
  }

  getProductTypes() {
    return this.http.get<ProductType[]>(this.baseUrl + 'products/types');
  }

  getProductBrands() {
    return this.http.get<Brand[]>(this.baseUrl + 'products/brands');
  }
}
