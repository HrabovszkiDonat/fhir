import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subject } from 'rxjs';
import { filter, concatMap } from 'rxjs/operators';
import { PatientFormComponent } from 'src/app/pages/patients/patient-form/patient-form.component';
import { Patient } from 'src/app/models/communication.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
})
export class PatientsComponent implements OnInit, OnDestroy {
  public data$: Observable<any[]>;

  public readonly columns = ['identifier', 'name', 'gender', 'birthDate'];
  private destroy$: Subject<boolean> = new Subject();

  constructor(
    private dataService: DataService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.data$ = this.dataService.getAll('patients');
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  addPatient(): void {
    const dialogRef = this.dialog.open(PatientFormComponent, {
      width: '300px',
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter((res) => res !== undefined),
        concatMap((patient: Patient) =>
          this.dataService.add(patient, 'patients')
        )
      )
      .subscribe((res) => {
        this.snackBar.open('Patient saved.', null, { duration: 3000 });
      });
  }
}
