import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ExpenseContainerComponent } from './expense-container/expense-container.component';

interface itemData {
  icon: string;
  activity: string;
  expense: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LineChartComponent, PieChartComponent, ExpenseContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'expense-tracker';
  totalCost = "2000"
  items: itemData[] = [
    {
      icon: "fas fa-coffee",
      activity: "Coffee",
      expense: "2.50"
    },
    {
      icon: "fas fa-coffee",
      activity: "Pint",
      expense: "5"
    },
    {
      icon: "fas fa-gamepad",
      activity: "Hogwarts",
      expense: "30"
    },
    {
      icon: "fas fa-sun",
      activity: "Rome",
      expense: "700"
    },
    {
      icon: "fas fa-shopping-cart",
      activity: "Food Shop",
      expense: "100"
    },
    {
      icon: "fas fa-utensils",
      activity: "KFC",
      expense: "15"
    }
  ];

  constructor() {

  }

}
