import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';

interface itemData {
  icon: string;
  activity: string;
  expense: string;
}

interface modalData {
  expense: string;
  category: string;
  description: string;
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
  @Input() totalCost: string = "";

  constructor(private dialog: MatDialog) { }

  openModal(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '400px',
      height: '400px',
    });

    // Handle modal close event if needed
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addExpense(result);
      }
    });
  }

  addExpense(modalData: modalData) {
    let itemToAdd = {
      icon: "",
      activity: "",
      expense: ""
    };
    itemToAdd.activity = modalData.description;
    itemToAdd.expense = modalData.expense;


    switch (modalData.category) {
      case 'holiday':
        itemToAdd.icon = 'fas fa-coffee';
        break;
      case 'drinks':
        itemToAdd.icon = 'fas fa-coffee';
        break;
      case 'food':
        itemToAdd.icon = 'fas fa-utensils';
        break;
      case 'games':
        itemToAdd.icon = 'fas fa-gamepad';
        break;
      case 'sport':
        itemToAdd.icon = 'fas fa-dumbbell';
        break;
      case 'streaming':
        itemToAdd.icon = 'fas fa-play';
        break;
    }

    this.items.push(itemToAdd);
  }

}
