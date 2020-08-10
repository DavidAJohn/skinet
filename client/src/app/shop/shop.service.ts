import { Brand } from './../shared/models/brand';
import { ProductType } from './../shared/models/productType';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPagination } from '../shared/models/pagination';
import { map } from 'rxjs/operators';
import { ShopParams } from '../shared/models/shopParams';
import { Product } from '../shared/models/product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private baseUrl = 'https://localhost:5001/api/';
  products: Product[] = [];
  brands: Brand[] = [];
  productTypes: ProductType[] = [];

  constructor(private http: HttpClient) {
  }

  getProducts(shopParams: ShopParams) {
    let params = new HttpParams();

    if (shopParams.brandId !== 0) {
      params = params.append('brandId', shopParams.brandId.toString());
    }

    if (shopParams.typeId !== 0) {
      params = params.append('typeId', shopParams.typeId.toString());
    }

    if (shopParams.search) {
      params = params.append('search', shopParams.search);
    }

    params = params.append('sort', shopParams.sort);
    params = params.append('pageIndex', shopParams.pageNumber.toString());
    params = params.append('pageSize', shopParams.pageSize.toString());

    return this.http.get<IPagination>(this.baseUrl + 'products', {observe: 'response', params})
      .pipe(
        map(response => {
          return response.body;
        })
      );
  }

  getProduct(id: number) {
    const product = this.products.find(p => p.id === id);

    if (product) {
      return of(product); // return an Observable of products
    }

    return this.http.get<Product>(this.baseUrl + 'products/' + id);
  }

  getProductTypes() {
    if (this.productTypes.length > 0) {
      return of(this.productTypes); // return an Observable of product types
    }

    return this.http.get<ProductType[]>(this.baseUrl + 'products/types')
      .pipe(
        map(response => {
          this.productTypes = response; // 'cache' the response
          return response;
        })
      );
  }

  getProductBrands() {
    if (this.brands.length > 0) {
      return of(this.brands); // return an Observable of product brands
    }

    return this.http.get<Brand[]>(this.baseUrl + 'products/brands')
      .pipe(
        map(response => {
          this.brands = response; // 'cache' the response
          return response;
        })
      );
  }
}
