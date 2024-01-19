import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineAppointmentComponent } from './machine-appointment.component';

describe('MachineAppointmentComponent', () => {
  let component: MachineAppointmentComponent;
  let fixture: ComponentFixture<MachineAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachineAppointmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MachineAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
