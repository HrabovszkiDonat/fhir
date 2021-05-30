import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {
  CommunicationStatuses,
  CommunicationPriorities,
} from 'src/app/constants/communication';
import { Topics } from 'src/app/constants/topics';
import { Communication } from 'src/app/models/communication.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-communications-form',
  templateUrl: './communications-form.component.html',
  styleUrls: ['./communications-form.component.css'],
})
export class CommunicationsFormComponent implements OnInit {
  title: string = '';
  formGroup: FormGroup;

  patients$: Observable<any[]>;

  readonly statuses: string[] = CommunicationStatuses;
  readonly priorities: string[] = CommunicationPriorities;
  readonly topics: string[] = Topics;

  constructor(
    public dialogRef: MatDialogRef<CommunicationsFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string; formData: any },
    private fb: FormBuilder,
    private dataService: DataService,
    private snackBar: MatSnackBar
  ) {
    this.patients$ = dataService.getAll('patients');
  }

  ngOnInit(): void {
    this.formGroup = this.createFormGroup();

    this.title = this.data.title;

    if (this.data.formData) {
      const communication: Communication = {
        identifier: this.dataService.getPropertyValue(
          this.data.formData,
          'identifier'
        ),
        patient: this.dataService.getPropertyValue(
          this.data.formData,
          'patient'
        ),
        status: this.dataService.getPropertyValue(this.data.formData, 'status'),
        priority: this.dataService.getPropertyValue(
          this.data.formData,
          'priority'
        ),
        topic: this.dataService.getPropertyValue(this.data.formData, 'topic'),
        sent: this.dataService.getPropertyValue(this.data.formData, 'sent'),
      };

      this.formGroup.patchValue(communication);

      console.log(this.formGroup.value);
    }
  }

  saveHandler(): void {
    const data: Communication = {
      ...this.formGroup.value,
      sent: JSON.stringify(new Date()),
    };

    console.log(data);

    this.data.formData
      ? // Update
        this.dataService
          .update(data, this.data.formData, 'communications')
          .subscribe((res) => {
            this.snackBar.open('Communication updated.', null, {
              duration: 3000,
            });
            this.dialogRef.close();
          })
      : // Save
        this.dataService.add(data, 'communications').subscribe((res) => {
          this.snackBar.open('Communication saved.', null, { duration: 3000 });
          this.dialogRef.close();
        });
  }

  private createFormGroup(): FormGroup {
    return this.fb.group({
      identifier: [new Date().getTime()],
      patient: [null, Validators.required],
      priority: [null, Validators.required],
      status: [null, Validators.required],
      topic: [null, Validators.required],
      sent: [null],
    });
  }
}
