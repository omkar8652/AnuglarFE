import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login, Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private myhttp:HttpClient) { }
  ProductUrl:string='https://localhost:7248/api/Products';
  LoginUrl:string='https://localhost:7248/api/Login';

  ProductList:Product[]=[]; //for getting data list
  LoginList:Login[]=[];

  ProductData:Product= new Product(); //for Post Data
  LoginData:Login= new Login();

  saveLogin()
  {
    return this.myhttp.post(this.LoginUrl,this.LoginData);
  }

  UpdateLogin()
  {
    return this.myhttp.put(`${this.LoginUrl}/${this.LoginData.id}`,this.LoginData);
  }

  getLogin():Observable<Login[]>
  {
    return this.myhttp.get<Login[]>(this.LoginUrl);
  }

  DeleteLogin(id:Number)
  {
      return this.myhttp.delete(`${this.LoginUrl}/${id}`);
  }
}
