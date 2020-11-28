import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {
  @Input() name: string;
  @Input() dosis: string;

  disableNo: boolean;
  disableDown: boolean;
  disableSteady: boolean;
  disableUp: boolean;

  selectNo: boolean;
  selectSteady: boolean;

  constructor() {
   }

  ngOnInit(): void {
    this.setMedicineFields(this.dosis);    
  }

  public resetField(): void {
    this.setMedicineFields(this.dosis);
  }

  private setMedicineFields(dosis: string): void {
    if (dosis == "No") {
      this.disableNo = false;
      this.disableDown = true;
      this.disableSteady = true;
      this.disableUp = false;
      this.selectNo = true;
      this.selectSteady = false;
    }
    else {
      this.disableNo = true;
      this.disableDown = false;
      this.disableSteady = false;
      this.disableUp = false;
      this.selectNo = false;
      this.selectSteady = true;
    }
  }
}
