import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {
  patient: Patient = {
    name: "john",
    age: 22,
    sex: "Male",
    race: "Caucasian",
    number_outpatient: 2,
    number_emergency: 4,
    number_inpatient: 1,
    max_glu_serum: "2",
    A1Cresult: "3",

    metformin: "No",
    repaglinide: "No",
    nateglinide: "No",
    chlorpropamide: "No",
    glimepiride: "No",
    acetohexamide: "No",
    glipizide: "No",
    glyburide: "No",
    tolbutamide: "No",
    pioglitazone: "No",
    rosiglitazone: "No",
    acarbose: "No",
    miglitol: "No",
    troglitazone: "No",
    tolazamide: "No", 
    examide: "No",
    citoglipton: "No",
    insulin: "No",
    glyburide_metformin: "No",
    glipizide_metformin: "No",
    glimepiride_pioglitazone: "No",
    metformin_rosiglitazone: "No",
    metformin_pioglitazone: "No",

    change: "No",
    diabetesMed: "No",
    readmitted: "No",

    _diag_1: "ouch",
    _diag_2: "owie",
    _diag_3: "oooof",
  }


  constructor() { }

  ngOnInit(): void {
  }

}
