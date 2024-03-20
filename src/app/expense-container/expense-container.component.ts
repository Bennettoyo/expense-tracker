import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface itemData {
  icon: string;
  activity: string;
  expense: string;
}

@Component({
  selector: 'app-expense-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expense-container.component.html',
  styleUrl: './expense-container.component.scss'
})
export class ExpenseContainerComponent {
  @Input() items: itemData[] = [];

}
