import { Component, OnInit,ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { IconSetService } from '@coreui/icons-angular';
//import { iconSubset } from './icons/icon-subset';
import { Title } from '@angular/platform-browser';
import { AbstractControl, AbstractControlOptions, AsyncValidatorFn, FormGroup, ValidatorFn } from '@angular/forms';

interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: number;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
}
interface SidebarModule {
  label: string;
  routerLink: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'CoreUI Free Angular Admin Template';
  @ViewChild('collapseRef', { static: true }) collapseRef: any;
  isDropdownOpen: boolean = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  showNavBar = true;

  // Function to hide the navigation bar
  hideNavBar() {
    this.showNavBar = false;
  }
  
  
  modules: SidebarModule[] = [
    { label: 'dashboard', routerLink: '/' },
    { label: 'Appointment', routerLink: '/Appointment' },
    { label: 'Patient Registration', routerLink: '/patient-registration' },
    { label: 'OutPatient Management', routerLink: '/outpatient-management' },
    { label: 'Health CheckUP', routerLink: '/health-checkup' },
    { label: 'Laboratory', routerLink: '/laboratory' },
    { label: 'Radiology', routerLink: '/radiology' },
    { label: 'Inpatient Management', routerLink: '/inpatient-management' },
    { label: 'Inpatient Billing', routerLink: '/inpatient-billing' },
    { label: 'Nurse Station', routerLink: '/nurse-station' },
    { label: 'Operation Theatre', routerLink: '/operation-theatre' },
    { label: 'Blood Bank', routerLink: '/blood-bank' },
    { label: 'Mis Report', routerLink: '/mis-report' },
    { label: 'Pharmacy', routerLink: '/pharmacy' },
    { label: 'Software Management', routerLink: '/software-management' },
    { label: 'System Control', routerLink: '/system-control' },
    { label: 'Phlebotomy', routerLink: '/phlebotomy' },
    { label: 'Doctor Assistant', routerLink: '/doctor-assistant' },
    { label: 'Store Management', routerLink: '/store-management' },
    { label: 'OPD Clinical Management', routerLink: '/opd-clinical-management' },
    { label: 'Tally', routerLink: '/tally' },
    { label: 'MRD Management', routerLink: '/mrd-management' },
    { label: 'Doctor Accounting', routerLink: '/doctor-accounting' },
    { label: 'Asset Management', routerLink: '/asset-management' },
    { label: 'Video/Phone Conversation', routerLink: '/video-phone-conversation' },
    { label: 'CSSD', routerLink: '/cssd' },
    { label: 'Equipment Maintenance', routerLink: '/equipment-maintenance' },
    { label: 'Physiotherapy', routerLink: '/physiotherapy' },
  ];
  public users: IUser[] = [
    {
      name: 'Yiorgos Avraamu',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Us',
      usage: 50,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Mastercard',
      activity: '10 sec ago',
      avatar: './assets/img/avatars/1.jpg',
      status: 'success',
      color: 'success'
    },
    {
      name: 'Avram Tarasios',
      state: 'Recurring ',
      registered: 'Jan 1, 2021',
      country: 'Br',
      usage: 10,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Visa',
      activity: '5 minutes ago',
      avatar: './assets/img/avatars/2.jpg',
      status: 'danger',
      color: 'info'
    },
    {
      name: 'Quintin Ed',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'In',
      usage: 74,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Stripe',
      activity: '1 hour ago',
      avatar: './assets/img/avatars/3.jpg',
      status: 'warning',
      color: 'warning'
    },
    {
      name: 'Enéas Kwadwo',
      state: 'Sleep',
      registered: 'Jan 1, 2021',
      country: 'Fr',
      usage: 98,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Paypal',
      activity: 'Last month',
      avatar: './assets/img/avatars/4.jpg',
      status: 'secondary',
      color: 'danger'
    },
    {
      name: 'Agapetus Tadeáš',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Es',
      usage: 22,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'ApplePay',
      activity: 'Last week',
      avatar: './assets/img/avatars/5.jpg',
      status: 'success',
      color: 'primary'
    },
    {
      name: 'Friderik Dávid',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Pl',
      usage: 43,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Amex',
      activity: 'Yesterday',
      avatar: './assets/img/avatars/6.jpg',
      status: 'info',
      color: 'dark'
    }
  ];
  }
