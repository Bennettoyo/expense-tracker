import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';

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
  @Input() totalCost: string = "";

  constructor(private dialog: MatDialog) {}

  openModal(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px' // Customize the width of the modal
    });

    // Handle modal close event if needed
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
