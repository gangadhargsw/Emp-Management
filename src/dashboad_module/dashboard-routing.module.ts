import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardContentComponent } from "./components/dashboard-content/dashboard-content.component";
import { EmployeeComponent } from "./components/employee/employee.component";
import { ExEmployeesComponent } from "./components/ex-employees/ex-employees.component";
import { DashboardComponent } from "./dashboard.component";


const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: '', component: DashboardContentComponent },
      { path: 'employees', component: EmployeeComponent },
      { path: 'ex-employees', component: ExEmployeesComponent }
    ]
  },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DashboardRoutingModule {
    constructor(){ }

   }
  