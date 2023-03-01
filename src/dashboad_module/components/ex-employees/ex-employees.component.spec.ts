import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExEmployeesComponent } from './ex-employees.component';

describe('ExEmployeesComponent', () => {
  let component: ExEmployeesComponent;
  let fixture: ComponentFixture<ExEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExEmployeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
