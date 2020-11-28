import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {
  @Input() name: string;
  @Input() dosis: string;

  constructor() {
   }

  ngOnInit(): void {
  }

}
