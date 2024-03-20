import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss'
})
export class LineChartComponent {
  single = [
    {
      "name": "Åland Islands",
      "series": [
        {
          "value": 4102,
          "name": "2016-09-23T13:58:26.106Z"
        },
        {
          "value": 4009,
          "name": "2016-09-16T15:48:19.353Z"
        },
        {
          "value": 4565,
          "name": "2016-09-18T19:22:06.800Z"
        },
        {
          "value": 3340,
          "name": "2016-09-15T02:26:07.824Z"
        },
        {
          "value": 4011,
          "name": "2016-09-17T18:05:05.359Z"
        }
      ]
    },
    {
      "name": "Guinea-Bissau",
      "series": [
        {
          "value": 4934,
          "name": "2016-09-23T13:58:26.106Z"
        },
        {
          "value": 4907,
          "name": "2016-09-16T15:48:19.353Z"
        },
        {
          "value": 2793,
          "name": "2016-09-18T19:22:06.800Z"
        },
        {
          "value": 6092,
          "name": "2016-09-15T02:26:07.824Z"
        },
        {
          "value": 3920,
          "name": "2016-09-17T18:05:05.359Z"
        }
      ]
    },
    {
      "name": "Serbia",
      "series": [
        {
          "value": 5853,
          "name": "2016-09-23T13:58:26.106Z"
        },
        {
          "value": 3781,
          "name": "2016-09-16T15:48:19.353Z"
        },
        {
          "value": 2888,
          "name": "2016-09-18T19:22:06.800Z"
        },
        {
          "value": 6568,
          "name": "2016-09-15T02:26:07.824Z"
        },
        {
          "value": 3444,
          "name": "2016-09-17T18:05:05.359Z"
        }
      ]
    },
    {
      "name": "French Polynesia",
      "series": [
        {
          "value": 2118,
          "name": "2016-09-23T13:58:26.106Z"
        },
        {
          "value": 4690,
          "name": "2016-09-16T15:48:19.353Z"
        },
        {
          "value": 2885,
          "name": "2016-09-18T19:22:06.800Z"
        },
        {
          "value": 5673,
          "name": "2016-09-15T02:26:07.824Z"
        },
        {
          "value": 6876,
          "name": "2016-09-17T18:05:05.359Z"
        }
      ]
    },
    {
      "name": "Angola",
      "series": [
        {
          "value": 4392,
          "name": "2016-09-23T13:58:26.106Z"
        },
        {
          "value": 5170,
          "name": "2016-09-16T15:48:19.353Z"
        },
        {
          "value": 2601,
          "name": "2016-09-18T19:22:06.800Z"
        },
        {
          "value": 3716,
          "name": "2016-09-15T02:26:07.824Z"
        },
        {
          "value": 5938,
          "name": "2016-09-17T18:05:05.359Z"
        }
      ]
    }
  ]

  // Customize view dimensions
  view: [number, number] = [700, 400];

  // Customize chart options
  // For more options: https://swimlane.github.io/ngx-charts/#/ngx-charts/line-chart
  // For example, to add legends, tooltips, etc.
  // legend: boolean = true;
  // showXAxisLabel: boolean = true;
  // xAxisLabel: string = 'Country';
  // showYAxisLabel: boolean = true;
  // yAxisLabel: string = 'Population';

  // Customize animations
  // For more options: https://swimlane.github.io/ngx-charts/#/ngx-charts/base-chart
  // animations: boolean = true;
  // xAxis: boolean = true;
  // yAxis: boolean = true;
  // showGridLines: boolean = true;
  // gradient: boolean = true;
  // showXAxis: boolean = true;
  // showYAxis: boolean = true;
  // showLegend: boolean = true;
  // showXAxisLabel: boolean = true;
  // xAxisLabel: string = 'Country';
  // showYAxisLabel: boolean = true;
  // yAxisLabel: string = 'Population';

  colorScheme: any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    // Update single data dynamically if needed
    // setTimeout(() => {
    //   this.single = [...];
    // }, 2000);
  }

  onSelect(event: Event) {
    console.log(event);
  }
}
