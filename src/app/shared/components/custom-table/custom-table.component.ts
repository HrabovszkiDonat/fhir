import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css'],
})
export class CustomTableComponent implements OnInit {
  @Input() data: any[];
  @Input() columns: Column[];

  @Output() rowClick = new EventEmitter<{ title: string; formData: any }>();

  constructor() {}

  ngOnInit(): void {
    console.log(this.columns);
  }

  rowClickHandler(i: number, element: any): void {
    this.rowClick.emit({
      title: 'Edit communication',
      formData: element,
    });
  }
}
