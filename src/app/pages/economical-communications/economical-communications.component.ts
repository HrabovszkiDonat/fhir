import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommunicationColumns } from 'src/app/constants/communication';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-economical-communications',
  templateUrl: './economical-communications.component.html',
  styleUrls: ['./economical-communications.component.css'],
})
export class EconomicalCommunicationsComponent implements OnInit {
  filteredCommunications$: Observable<any[]>;

  readonly columns = CommunicationColumns;

  constructor(dataService: DataService) {
    this.filteredCommunications$ = dataService.getEconomicalCommunications();
  }

  ngOnInit(): void {}
}
