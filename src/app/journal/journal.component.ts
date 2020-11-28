import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MedicineComponent } from '../medicine/medicine.component';
import { Patient } from '../patient';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {
  private prescriptionPostedSource: Subject<number> = new Subject<number>();
  public prescriptionPosted$ = this.prescriptionPostedSource.asObservable();

  private url: string = "api/predict";

  constructor(private http: HttpClient) {
    this.prescriptionPosted$.subscribe(prediction => {this.predictionReceived(prediction)});

  }

  patients: Array<Patient> = [
    {name: "John", age: 60, gender: "Female", race: "Caucasian", time_in_hospital: 3, number_outpatient: 0, number_emergency: 1, number_inpatient: 1, number_diagnoses: 9, max_glu_serum: "None", A1Cresult: "None", metformin: "No", repaglinide: "No", nateglinide: "No", chlorpropamide: "No", glimepiride: "No", acetohexamide: "No", glipizide: "No", glyburide: "Steady", tolbutamide: "No", pioglitazone: "No", rosiglitazone: "No", acarbose: "No", miglitol: "No",troglitazone: "No", tolazamide: "No", examide: "No", citoglipton: "No", insulin: "No", glyburide_metformin: "No", glipizide_metformin: "No", glimepiride_pioglitazone: "No", metformin_rosiglitazone: "No", metformin_pioglitazone: "No", change: "No", diabetesMed: "Yes", readmitted: "<30", _diag_1: "Supplemental classification", _diag_2: "Diseases of the skin and subcutaneous tissue", _diag_3: "Endocrine, nutritional, and metabolic diseases and immunity disorders, without diabetes"},
    {name: "John", age: 50, gender: "Male", race: "Caucasian", time_in_hospital: 5, number_outpatient: 0, number_emergency: 0, number_inpatient: 0, number_diagnoses: 3, max_glu_serum: "None", A1Cresult: "None", metformin: "No", repaglinide: "No", nateglinide: "No", chlorpropamide: "No", glimepiride: "No", acetohexamide: "No", glipizide: "No", glyburide: "No", tolbutamide: "No", pioglitazone: "No", rosiglitazone: "No", acarbose: "No", miglitol: "No",troglitazone: "No", tolazamide: "No", examide: "No", citoglipton: "No", insulin: "No", glyburide_metformin: "No", glipizide_metformin: "No", glimepiride_pioglitazone: "No", metformin_rosiglitazone: "No", metformin_pioglitazone: "No", change: "No", diabetesMed: "Yes", readmitted: "NO", _diag_1: "Injury and poisoning", _diag_2: "Diabetes mellitus", _diag_3: "Diseases of the circulatory system"},
    {name: "John", age: 50, gender: "Female", race: "Caucasian", time_in_hospital: 1, number_outpatient: 0, number_emergency: 0, number_inpatient: 3, number_diagnoses: 9, max_glu_serum: "Norm", A1Cresult: "None", metformin: "No", repaglinide: "No", nateglinide: "No", chlorpropamide: "No", glimepiride: "No", acetohexamide: "No", glipizide: "No", glyburide: "No", tolbutamide: "No", pioglitazone: "No", rosiglitazone: "No", acarbose: "No", miglitol: "No",troglitazone: "No", tolazamide: "No", examide: "No", citoglipton: "No", insulin: "No", glyburide_metformin: "No", glipizide_metformin: "No", glimepiride_pioglitazone: "No", metformin_rosiglitazone: "No", metformin_pioglitazone: "No", change: "Ch", diabetesMed: "Yes", readmitted: ">30", _diag_1: "Diseases of the circulatory system", _diag_2: "Diseases of the skin and subcutaneous tissue", _diag_3: "Injury and poisoning"},
    {name: "John", age: 70, gender: "Female", race: "Caucasian", time_in_hospital: 1, number_outpatient: 0, number_emergency: 12, number_inpatient: 3, number_diagnoses: 9, max_glu_serum: "None", A1Cresult: "Norm", metformin: "No", repaglinide: "No", nateglinide: "No", chlorpropamide: "No", glimepiride: "No", acetohexamide: "No", glipizide: "No", glyburide: "No", tolbutamide: "No", pioglitazone: "No", rosiglitazone: "No", acarbose: "No", miglitol: "No",troglitazone: "No", tolazamide: "No", examide: "No", citoglipton: "No", insulin: "Down", glyburide_metformin: "No", glipizide_metformin: "No", glimepiride_pioglitazone: "No", metformin_rosiglitazone: "No", metformin_pioglitazone: "No", change: "Ch", diabetesMed: "Yes", readmitted: ">30", _diag_1: "Diseases of the respiratory system", _diag_2: "Diseases of the musculoskeletal system and connective tissue", _diag_3: "Diseases of the circulatory system"},
    {name: "John", age: 80, gender: "Female", race: "Caucasian", time_in_hospital: 4, number_outpatient: 0, number_emergency: 0, number_inpatient: 1, number_diagnoses: 4, max_glu_serum: "None", A1Cresult: "None", metformin: "No", repaglinide: "No", nateglinide: "No", chlorpropamide: "No", glimepiride: "No", acetohexamide: "No", glipizide: "No", glyburide: "No", tolbutamide: "No", pioglitazone: "No", rosiglitazone: "No", acarbose: "No", miglitol: "No",troglitazone: "No", tolazamide: "No", examide: "No", citoglipton: "No", insulin: "No", glyburide_metformin: "No", glipizide_metformin: "No", glimepiride_pioglitazone: "No", metformin_rosiglitazone: "No", metformin_pioglitazone: "No", change: "Ch", diabetesMed: "Yes", readmitted: ">30", _diag_1: "Diseases of the circulatory system", _diag_2: "Diseases of the respiratory system", _diag_3: "Injury and poisoning"},
    {name: "John", age: 40, gender: "Male", race: "Caucasian", time_in_hospital: 2, number_outpatient: 0, number_emergency: 0, number_inpatient: 0, number_diagnoses: 9, max_glu_serum: "None", A1Cresult: "None", metformin: "No", repaglinide: "No", nateglinide: "No", chlorpropamide: "No", glimepiride: "No", acetohexamide: "No", glipizide: "No", glyburide: "No", tolbutamide: "No", pioglitazone: "No", rosiglitazone: "No", acarbose: "No", miglitol: "No",troglitazone: "No", tolazamide: "No", examide: "No", citoglipton: "No", insulin: "No", glyburide_metformin: "No", glipizide_metformin: "No", glimepiride_pioglitazone: "No", metformin_rosiglitazone: "No", metformin_pioglitazone: "No", change: "Ch", diabetesMed: "Yes", readmitted: "NO", _diag_1: "Diseases of the musculoskeletal system and connective tissue", _diag_2: "Endocrine, nutritional, and metabolic diseases and immunity disorders, without diabetes", _diag_3: "Diseases of the nervous system"},
    {name: "John", age: 60, gender: "Female", race: "Caucasian", time_in_hospital: 4, number_outpatient: 0, number_emergency: 0, number_inpatient: 1, number_diagnoses: 6, max_glu_serum: "None", A1Cresult: "None", metformin: "No", repaglinide: "No", nateglinide: "No", chlorpropamide: "No", glimepiride: "No", acetohexamide: "No", glipizide: "No", glyburide: "No", tolbutamide: "No", pioglitazone: "No", rosiglitazone: "No", acarbose: "No", miglitol: "No",troglitazone: "No", tolazamide: "No", examide: "No", citoglipton: "No", insulin: "Steady", glyburide_metformin: "No", glipizide_metformin: "No", glimepiride_pioglitazone: "No", metformin_rosiglitazone: "No", metformin_pioglitazone: "No", change: "Ch", diabetesMed: "No", readmitted: ">30", _diag_1: "Diseases of the sense organs", _diag_2: "Diseases of the genitourinary system", _diag_3: "Diseases of the circulatory system"},
    {name: "John", age: 80, gender: "Female", race: "Caucasian", time_in_hospital: 9, number_outpatient: 0, number_emergency: 0, number_inpatient: 1, number_diagnoses: 4, max_glu_serum: "None", A1Cresult: "None", metformin: "Steady", repaglinide: "No", nateglinide: "No", chlorpropamide: "No", glimepiride: "No", acetohexamide: "No", glipizide: "No", glyburide: "No", tolbutamide: "No", pioglitazone: "No", rosiglitazone: "No", acarbose: "No", miglitol: "No",troglitazone: "No", tolazamide: "No", examide: "No", citoglipton: "No", insulin: "Down", glyburide_metformin: "No", glipizide_metformin: "No", glimepiride_pioglitazone: "No", metformin_rosiglitazone: "No", metformin_pioglitazone: "No", change: "Ch", diabetesMed: "Yes", readmitted: ">30", _diag_1: "Injury and poisoning", _diag_2: "Diseases of the circulatory system", _diag_3: "Diseases of the genitourinary system"},
    {name: "John", age: 60, gender: "Male", race: "Caucasian", time_in_hospital: 4, number_outpatient: 0, number_emergency: 0, number_inpatient: 0, number_diagnoses: 9, max_glu_serum: "None", A1Cresult: "None", metformin: "No", repaglinide: "No", nateglinide: "No", chlorpropamide: "No", glimepiride: "No", acetohexamide: "No", glipizide: "Down", glyburide: "No", tolbutamide: "No", pioglitazone: "Steady", rosiglitazone: "No", acarbose: "No", miglitol: "No",troglitazone: "No", tolazamide: "No", examide: "No", citoglipton: "No", insulin: "No", glyburide_metformin: "No", glipizide_metformin: "No", glimepiride_pioglitazone: "No", metformin_rosiglitazone: "No", metformin_pioglitazone: "No", change: "Ch", diabetesMed: "Yes", readmitted: ">30", _diag_1: "Diseases of the circulatory system", _diag_2: "Diseases of the circulatory system", _diag_3: "Other symptoms, signs, and ill-defined conditions"},
    ]

  patient: Patient = this.patients[7];

  @ViewChildren(MedicineComponent) components:QueryList<MedicineComponent>;

  public resetFields(): void {
    alert("The reset button doesn't work :/");

    this.components.forEach(medicineComponents => {
      medicineComponents.resetField();
    })
  }

  public postPrescription(patient: Patient) {
    this.http.post(this.url, {
      patient
    }).subscribe(predictionJSON => {
    const prediction = 42;
      this.prescriptionPostedSource.next(prediction);
    })
  }

  private predictionReceived(prediction: number) {
    console.log(prediction);
  }


  ngOnInit(): void {
  }

}
