import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
//   declarations: [
   
//   ],
  // bootstrap: [BranchCrudComponent],
  imports: [
    CommonModule,
    MatButtonModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class productModule { }
