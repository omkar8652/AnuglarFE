import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { Column, GridOption, Formatters, AngularGridInstance, OnEventArgs, FieldType, Formatter } from 'angular-slickgrid';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  
  
  columnDefinitions2: Column[] = [];
  ngOnInit(): void {
  } 

  

}

