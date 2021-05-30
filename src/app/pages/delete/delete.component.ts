import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { CommunicationColumns } from 'src/app/constants/communication';
import { Communication } from 'src/app/models/communication.model';
import { DataService } from 'src/app/services/data.service';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent implements OnInit {
  communications$: Observable<Communication[]>;

  columns = CommunicationColumns;

  constructor(
    private dialog: MatDialog,
    private dataService: DataService,
    private snackBar: MatSnackBar
  ) {
    this.communications$ = dataService.getAll('communications');
  }

  ngOnInit(): void {}

  deleteHandler(e): void {
    console.log('DELETE', e);

    const dialogRef = this.dialog.open(ConfirmComponent, { data: e.formData });

    dialogRef
      .afterClosed()
      .pipe(
        filter((res) => !!res),
        switchMap((data: any) =>
          this.dataService.delete(e.formData, 'communications')
        )
      )
      .subscribe(() => {
        // TODO: Show Snack
        this.snackBar.open('Delete was successful.');
      });
  }
}
