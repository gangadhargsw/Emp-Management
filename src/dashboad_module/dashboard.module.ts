import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { DashboardContentComponent } from './components/dashboard-content/dashboard-content.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SidenavComponent,
    EmployeeComponent,
    DashboardContentComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  providers: [],
  bootstrap: [DashboardComponent]

})
export class DashboardModule {
  constructor(){
    console.log("dashborad module")
  }
 }
