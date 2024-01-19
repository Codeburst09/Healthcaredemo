import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalTariffComponent } from './hospital-tariff.component';

describe('HospitalTariffComponent', () => {
  let component: HospitalTariffComponent;
  let fixture: ComponentFixture<HospitalTariffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HospitalTariffComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HospitalTariffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
