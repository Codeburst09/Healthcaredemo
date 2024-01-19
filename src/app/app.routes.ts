import { Routes } from '@angular/router';
import { HomepageComponent, } from './homepage/homepage.component';
import { NavComponent } from './nav/nav.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { DoctorAppointmentListComponent } from './appointment/doctor-appointment-list/doctor-appointment-list.component';
import { DoctorAvailabilityComponent } from './appointment/doctor-availability/doctor-availability.component';
import { DoctorLeaveComponent } from './appointment/doctor-leave/doctor-leave.component';
import { HospitalTariffComponent } from './appointment/hospital-tariff/hospital-tariff.component';
import { MachineAppointmentComponent } from './appointment/machine-appointment/machine-appointment.component';
import { MachineAppointmentListComponent } from './appointment/machine-appointment-list/machine-appointment-list.component';
import { InvestigationReportComponent } from './appointment/investigation-report/investigation-report.component';
import { PatientRegistrationComponent } from './appointment/patient-registration/patient-registration.component';
//import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [

    {
        path: '',
        component :HomepageComponent,
        title :'Home Page '
    },
    {
        path: 'nav',
        component :NavComponent,
        title :'Nav Page '
    },
    {
        path: 'Appointment',
        component :AppointmentComponent,
        title :'Appointment Page '
    },
    {
        path: 'doctor-appointment-list',
        component :DoctorAppointmentListComponent,
        title :'Appointment List Page'
    },
    {
        path: 'doctor-availability',
        component :DoctorAvailabilityComponent,
        title :'Doctor Availability Page'
    },
    {
        path: 'doctor-leave',
        component :DoctorLeaveComponent,
        title :'Doctor Leave Page'
    },
    {
        path: 'hospital-tariff',
        component :HospitalTariffComponent,
        title :'Hospital Tarrif Page'
    },
    {
        path: 'machine-appointment',
        component :MachineAppointmentComponent,
        title :'Machine Appointment Page'
    },
    {
        path: 'machine-appointment-list',
        component :MachineAppointmentListComponent,
        title :'Machine Appointment List Page'
    },
    {
        path: 'investigation-report',
        component :InvestigationReportComponent,
        title :'Investigation Report Page'
    },
    {
        path: 'patient-registration',
        component :PatientRegistrationComponent,
        title :'Patient Registration Page'
    },
        
    


];

