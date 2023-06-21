import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { MatSliderModule } from '@angular/material/slider';

const routes: Routes = [
  { path: '', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes),MatSliderModule,],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
