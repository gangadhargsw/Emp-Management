import { Component } from '@angular/core';

@Component({
  selector: 'app-ex-employees',
  templateUrl: './ex-employees.component.html',
  styleUrls: ['./ex-employees.component.css']
})

export class ExEmployeesComponent {
btn : boolean = true;
seachtext: any;
name: any;

submit(val:any){
  // this.btn = !this.btn;
  this.name = val;
  console.log(this.name)
}
}

