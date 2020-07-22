import { Brand } from './../shared/models/brand';
import { ProductType } from './../shared/models/productType';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPagination } from '../shared/models/pagination';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) {
  }

  getProducts(brandId?: number, typeId?: number, sortSelected?: string) {
    let params = new HttpParams();

    if (brandId) {
      params = params.append('brandId', brandId.toString());
    }

    if (typeId) {
      params = params.append('typeId', typeId.toString());
    }

    if (sortSelected) {
      params = params.append('sort', sortSelected);
    }

    return this.http.get<IPagination>(this.baseUrl + 'products', {observe: 'response', params})
      .pipe(
        map(response => {
          return response.body;
        })
      );
  }

  getProductTypes() {
    return this.http.get<ProductType[]>(this.baseUrl + 'products/types');
  }

  getProductBrands() {
    return this.http.get<Brand[]>(this.baseUrl + 'products/brands');
  }
}
