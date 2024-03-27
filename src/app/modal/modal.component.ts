import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

interface modalData {
  expense: string;
  category: string;
  description: string;
}

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [MatDialogModule, FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  data: modalData = {
    expense: '',
    category: '',
    description: ''
  }

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: any
  ) { }

  addExpense() {
    this.dialogRef.close(this.data);
  }
}
