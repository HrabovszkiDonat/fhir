import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Genders } from 'src/app/constants/genders';
import { Patient } from 'src/app/models/communication.model';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css'],
})
export class PatientFormComponent implements OnInit {
  @Input() editedPatient: Patient;

  public patient: Patient = {
    name: null,
    birthDate: null,
    gender: null,
    identifier: new Date().getTime(),
  };

  public readonly genders: string[] = Genders;

  constructor(
    public dialogRef: MatDialogRef<PatientFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    if (this.editedPatient) {
      this.patient = {
        ...this.editedPatient,
      };
    }
  }

  savePatient(): void {
    console.log('Save Clicked');

    if (this.patient.name && this.patient.birthDate && this.patient.gender) {
      this.dialogRef.close({
        ...this.patient,
        birthDate: JSON.stringify(this.patient.birthDate),
      });
    } else {
      this.dialogRef.close();
    }
  }
}
