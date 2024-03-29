import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorLeaveComponent } from './doctor-leave.component';

describe('DoctorLeaveComponent', () => {
  let component: DoctorLeaveComponent;
  let fixture: ComponentFixture<DoctorLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorLeaveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
