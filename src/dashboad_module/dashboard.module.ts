import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { DashboardContentComponent } from './components/dashboard-content/dashboard-content.component';
import { ExEmployeesComponent } from './components/ex-employees/ex-employees.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardComponent,
    SidenavComponent,
    EmployeeComponent,
    DashboardContentComponent,
    ExEmployeesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [DashboardComponent]

})
export class DashboardModule {
  constructor(){
    console.log("dashborad module")
  }
 }
