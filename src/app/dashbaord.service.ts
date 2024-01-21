import { Injectable } from '@angular/core';
//import { HomepageComponent } from './homepage/homepage.component';
import {DoughnutChartData} from './sharedtype.component';
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
          data: [4, 20, 80, 10]
        }
      ]
    }
  ];
  constructor() { }
  getdata():DoughnutChartData[]{
    return this.Dougnutdata;
  }
  
}

