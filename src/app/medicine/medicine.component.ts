import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {
  @Input() name: string;

  @Input() dosis: string;
  @Output() dosisChange = new EventEmitter<string>();

  selected: string = "No";

  disableNo: boolean;
  disableDown: boolean;
  disableSteady: boolean;
  disableUp: boolean;

  constructor() {
   }

  ngOnInit(): void {
    this.setMedicineFields(this.dosis);
  }

  public resetField(): void {
    this.setMedicineFields(this.dosis);
  }

  public clickedSelection(dosis): void {
    this.dosis = dosis;
    this.dosisChange.emit(dosis);
  }

  private setMedicineFields(dosis: string): void {
    if (dosis == "No") {
      this.disableNo = false;
      this.disableDown = true;
      this.disableSteady = true;
      this.disableUp = false;
    }
    else {
      this.disableNo = true;
      this.disableDown = false;
      this.disableSteady = false;
      this.disableUp = false;
    }
  }
}
