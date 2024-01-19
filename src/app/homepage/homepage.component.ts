import { Component } from '@angular/core';
import Chart from 'chart.js';
import { DashboardChartsData, IChartProps } from './homepage.chart';
//import { DashboardChartsData,  } from './homepage.chart';
interface SidebarModule {
  label: string;
  routerLink: string;
}
interface ChartData {
  label: string;
  data: number[];
  fill: boolean;
  borderColor: string;
  lineTension: number;
}

// Define an interface for the chart data


// Define an interface for the chart options


@Component({
  selector: 'app-homepage',
  standalone: false,
  
  templateUrl:'./homepage.component.html' ,
  styleUrl: './homepage.component.css'
})

export class HomepageComponent {
  constructor(private chartsData: DashboardChartsData) {
  }
  public mainChart: IChartProps = {};
  public chart: Array<IChartProps> = [];
  
  ngOnInit(): void {
    this.initCharts();
  }

  initCharts(): void {
    this.mainChart = this.chartsData.mainChart;
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

  
  

  setTrafficPeriod(value: string): void {
    //this.trafficRadioGroup.setValue({ trafficRadio: value });
    this.chartsData.initMainChart(value);
    this.initCharts();
  }
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    chartBarData = {
      labels: [...this.months].slice(0, 7),
      datasets: [
        {
          label: 'GitHub Commits',
          backgroundColor: '#f87979',
          data: [40, 20, 12, 39, 17, 42, 79]
        }
      ]
    };

  // chartBarOptions = {
  //   maintainAspectRatio: false,
  // };

  chartLineData = {
    labels: [...this.months].slice(0, 7),
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(220, 220, 220, 0.2)',
        borderColor: 'rgba(220, 220, 220, 1)',
        pointBackgroundColor: 'rgba(220, 220, 220, 1)',
        pointBorderColor: '#fff',
        data: [this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData]
      },
      {
        label: 'My Second dataset',
        backgroundColor: 'rgba(151, 187, 205, 0.2)',
        borderColor: 'rgba(151, 187, 205, 1)',
        pointBackgroundColor: 'rgba(151, 187, 205, 1)',
        pointBorderColor: '#fff',
        data: [this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData]
      }
    ]
  };

  chartLineOptions = {
    maintainAspectRatio: false,
  };

  chartDoughnutData = {
    labels: ['VueJs', 'EmberJs', 'ReactJs', 'Angular'],
    datasets: [
      {
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        data: [40, 20, 80, 10]
      }
    ]
  };

  // chartDoughnutOptions = {
  //   aspectRatio: 1,
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   radius: '100%'
  // };

  chartPieData = {
    labels: ['Red', 'Green', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }
    ]
  };

  // chartPieOptions = {
  //   aspectRatio: 1,
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   radius: '100%'
  // };

  chartPolarAreaData = {
    labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
    datasets: [
      {
        data: [11, 16, 7, 3, 14],
        backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB']
      }
    ]
  };

  chartRadarData = {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [
      {
        label: '2020',
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        tooltipLabelColor: 'rgba(179,181,198,1)',
        data: [65, 59, 90, 81, 56, 55, 40]
      },
      {
        label: '2021',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        tooltipLabelColor: 'rgba(255,99,132,1)',
        data: [this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData]
      }
    ]
  };

  // chartRadarOptions = {
  //   aspectRatio: 1.5,
  //   responsive: true,
  //   maintainAspectRatio: false,
  // };
  data = {
    labels: ['VueJs', 'EmberJs', 'ReactJs', 'Angular'],
    datasets: [{
      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
      data: [40, 20, 80, 10]
    }]
  };
  data1 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(220, 220, 220, 0.2)',
        borderColor: 'rgba(220, 220, 220, 1)',
        pointBackgroundColor: 'rgba(220, 220, 220, 1)',
        pointBorderColor: '#fff',
        data: [40, 20, 12, 39, 10, 80, 40]
      },
      {
        label: 'My Second dataset',
        backgroundColor: 'rgba(151, 187, 205, 0.2)',
        borderColor: 'rgba(151, 187, 205, 1)',
        pointBackgroundColor: 'rgba(151, 187, 205, 1)',
        pointBorderColor: '#fff',
        data: [50, 12, 28, 29, 7, 25, 60]
      }
    ]
  };

  handleChartRef($chartRef: any) {
    if ($chartRef) {
      console.log('handleChartRef', $chartRef);
      this.data.labels.push('August');
      this.data.datasets[0].data.push(60);
      this.data.datasets[1].data.push(20);
      setTimeout(() => {
        $chartRef?.update();
      }, 3000);
    }
  }
  data2 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'GitHub Commits',
        backgroundColor: '#f87979',
        data: [40, 20, 12, 39, 10, 80, 40]
      }
    ]
  };

  get randomData() {
    return Math.round(Math.random() * 100);
  }

}
