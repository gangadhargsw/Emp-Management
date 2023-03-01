import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from 'src/dashboad_module/services/empservice.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
employeeData:any = [];
tableBodyHide: boolean = true;

  constructor(private empService: EmpserviceService) { }

  ngOnInit(): void {
    this.getAllEmp();
  }
  getAllEmp() {
    this.empService.getAllEmployees().subscribe((data) => {
      console.log(data);
      this.employeeData = data;
      this.tableBodyHide = false;
    },(err) => {
      console.log(err);
      this.tableBodyHide = true;
    })
  }

}
