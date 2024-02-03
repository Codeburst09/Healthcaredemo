import { Injectable } from '@angular/core';
//import { HomepageComponent } from './homepage/homepage.component';
import {DoughnutChartData} from './sharedtype.component';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class DashbaordService {
  protected Dougnutdata: DoughnutChartData[] = [
    {
      labels: ['VueJs', 'EmberJs', 'ReactJs', 'Angular'],
      datasets: [
        {
          backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
          data: [40, 20, 80, 10]
        }
      ]
    }
  ];
  private myForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      // Define your form controls here
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // ... other form controls
    });
   }
  getdata():DoughnutChartData[]{
    return this.Dougnutdata;
  }
  resetForm(): void {
    this.myForm.reset();
  }
  
  
}

