import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AlertModule, PopoverModule, ProgressBarComponent, ProgressModule, TableModule, TooltipModule } from '@coreui/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import {
    ButtonGroupModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    FormModule,
    GridModule,
    ListGroupModule,
    SharedModule,
    ModalModule,
    NavModule,
    
     
  } from '@coreui/angular';
  
import { IconModule } from '@coreui/icons-angular';
//import { ChartjsModule } from '@coreui/angular-chartjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
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
import { ChartjsComponent } from '@coreui/angular-chartjs';

@NgModule({
    declarations: [AppComponent,PatientRegistrationComponent,InvestigationReportComponent,MachineAppointmentListComponent,MachineAppointmentComponent,HospitalTariffComponent,AppComponent,DoctorAvailabilityComponent,DoctorLeaveComponent, HomepageComponent,NavComponent, AppointmentComponent,DoctorAppointmentListComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [FormsModule,ChartjsComponent,ProgressModule,TableModule,NavModule,ModalModule,ListGroupModule,ButtonModule,TooltipModule,PopoverModule,GridModule,CardModule, IconModule,ListGroupModule,RouterModule.forRoot(routes), ReactiveFormsModule,DropdownModule,SharedModule,ListGroupModule,CommonModule,AlertModule,IconModule, BrowserAnimationsModule,FormModule,GridModule,CardModule,ButtonModule,ButtonGroupModule],
  bootstrap: [AppComponent]
})
export class AppModule 
{

}