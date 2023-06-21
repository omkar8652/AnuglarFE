import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component'
import { ProductComponent } from 'src/app/product/product.component'
const routes: Routes = [
  { 
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },


  { path: 'login', component: LoginComponent },

  // {
  //   // children: [
  //   //   {
  //   //     path: 'product', loadChildren: () => import('src/app/product/product-routing.module').then(m => m.ProductRoutingModule)
  //   //     , data: { title: 'Product', breadcrumb: [{ label: 'Product', url: '/product' }] }
  //   //   },

  //   //   {
  //   //     path: 'login', loadChildren: () => import('src/app/login/login.component').then(m => m.LoginComponent)
  //   //     , data: { title: 'Login', breadcrumb: [{ label: 'Login', url: '/login' }] }
  //   //   }
  //   // ]

  // },

  {
    path: 'login', loadChildren: () => import('src/app/login/login.component').then(m => m.LoginComponent)
    , data: { title: 'Login', breadcrumb: [{ label: 'Login', url: '/login' }] }
  },
  
  {
    path: 'product', loadChildren: () => import('src/app/product/product-routing.module').then(m => m.ProductRoutingModule)
    , data: { title: 'product', breadcrumb: [{ label: 'product', url: '/product' }] }
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
