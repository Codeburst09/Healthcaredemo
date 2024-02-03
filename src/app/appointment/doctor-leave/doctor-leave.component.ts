import { Component } from '@angular/core';
interface SidebarModule {
  label: string;
  routerLink: string;
}
@Component({
  selector: 'app-doctor-leave',
  standalone: false,
  templateUrl: './doctor-leave.component.html',
  styleUrl: './doctor-leave.component.css'
})
export class DoctorLeaveComponent {
  customStylesValidated = false;
  browserDefaultsValidated = false;
  tooltipValidated = false;
  onSubmit1() {
    this.customStylesValidated = true;
    console.log('Submit... 1');
  }

  onReset1() {
    this.customStylesValidated = false;
    console.log('Reset... 1');
  }

  onSubmit2() {
    this.browserDefaultsValidated = true;
    console.log('Submit... 2');
  }

  onReset2() {
    this.browserDefaultsValidated = false;
    console.log('Reset... 3');
  }

  onSubmit3() {
    this.tooltipValidated = true;
    console.log('Submit... 3');
  }

  onReset3() {
    this.tooltipValidated = false;
    console.log('Reset... 3');
  }
  showNavBar = false;
  hideNavBar() {
    this.showNavBar = false;
  }
  modules: SidebarModule[] = [
    { label: 'Doctor Appointment', routerLink: '/Appointment' },
    { label: 'Doctor Appointment List', routerLink: '/doctor-appointment-list' },
    { label: 'Doctor Availability', routerLink: '/doctor-availability' },
    { label: 'Doctor Leave', routerLink: '/doctor-leave' },
    { label: 'Hospital Tariff', routerLink: '/hospital-tariff' },
    { label: 'Machine Appointment', routerLink: '/machine-appointment' },
    { label: 'Machine Appointment List', routerLink: '/machine-appointment-list' },
    { label: 'Investigation Report', routerLink: '/investigation-report' },
    { label: 'Patient Registration', routerLink: '/patient-registration' },
    // Add more modules as needed
  ];

}
