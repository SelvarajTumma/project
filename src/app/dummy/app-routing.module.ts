import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp4Component } from '../cmp4/cmp4.component';
import { RouterModule,Routes } from '@angular/router';

const route:Routes=[
  {
    path:"cmp1",component:Cmp4Component
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
