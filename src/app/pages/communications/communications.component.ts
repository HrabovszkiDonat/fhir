import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CommunicationColumns } from 'src/app/constants/communication';
import { Communication } from 'src/app/models/communication.model';
import { DataService } from 'src/app/services/data.service';
import { CommunicationsFormComponent } from './communications-form/communications-form.component';

@Component({
  selector: 'app-communications',
  templateUrl: './communications.component.html',
  styleUrls: ['./communications.component.css'],
})
export class CommunicationsComponent implements OnInit {
  @Input() addBtn: boolean = true;
  communications$: Observable<Communication[]>;

  columns = CommunicationColumns;

  constructor(dataService: DataService, private dialog: MatDialog) {
    this.communications$ = dataService.getAll('communications');
  }

  ngOnInit(): void {}

  addCommunication(): void {
    this.dialog.open(CommunicationsFormComponent, {
      data: {
        title: 'Add communication',
        FormData: null,
      },
      panelClass: 'custom-dialog',
    });
  }

  rowClickHandler(element): void {
    console.log(element);

    const dialogRef = this.dialog.open(CommunicationsFormComponent, {
      data: element,
    });
  }
}
