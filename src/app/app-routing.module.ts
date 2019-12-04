import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReportsComponent } from './reports/reports.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'customers',component: CustomersComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'reports', component: ReportsComponent},
  {path: 'nav', component: NavComponent},
  {path: 'home', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
