import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { LandingPageComponent } from './employees/landing-page/landing-page.component';

const routes: Routes = [
  {path: 'list', component: ListEmployeesComponent},
  {path: 'create', component: CreateEmployeeComponent},
  {path: 'landing', component: ListEmployeesComponent},
  {path: '', redirectTo: '/list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
