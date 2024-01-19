import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineAppointmentListComponent } from './machine-appointment-list.component';

describe('MachineAppointmentListComponent', () => {
  let component: MachineAppointmentListComponent;
  let fixture: ComponentFixture<MachineAppointmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachineAppointmentListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MachineAppointmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
