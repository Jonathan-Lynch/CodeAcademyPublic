import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';


const routes: Routes = [
  {path: 'basic', component: BasicTableComponent},
  {path: 'dynamic', component: DynamicTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
