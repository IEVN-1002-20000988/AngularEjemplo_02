import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Suma2Component } from './fomrularios/suma2/suma2.component';
import { OperasBasComponent } from './formularios/operas-bas/operas-bas.component';
import { ProductListComponent } from './product/product-list/product-list.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'suma2',component:Suma2Component},
  {path:'operasBas',component:OperasBasComponent},
  {path:'lista',component:ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
