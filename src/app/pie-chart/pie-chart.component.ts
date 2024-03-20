import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss'
})
export class PieChartComponent {
  single = [
    {
      "name": "Snacks",
      "value": 40632,
      "extra": {
        "code": "de"
      }
    },
    {
      "name": "Holidays",
      "value": 50000,
      "extra": {
        "code": "us"
      }
    },
    {
      "name": "Games",
      "value": 36745,
      "extra": {
        "code": "fr"
      }
    },
    {
      "name": "Shopping",
      "value": 36240,
      "extra": {
        "code": "uk"
      }
    },
    {
      "name": "Drinks",
      "value": 33000,
      "extra": {
        "code": "es"
      }
    },
  ]


  view: [number, number] = [700, 400];

  // Customize colors for the pie slices
  colorScheme: any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C']
  };

  constructor() { }

  onSelect(event: Event) {
    console.log(event);
  }

}
