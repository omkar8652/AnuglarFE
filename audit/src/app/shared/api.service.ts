import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {GlobalUrl} from 'src/app/shared/globalurl'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { 

  }

  
  getAllDetails(url: string) {
    return this.http.get<any[]>(url, {});
  }
  
}
