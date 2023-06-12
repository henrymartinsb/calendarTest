/* eslint-disable */
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { EventTable } from '../../../interfaces/eventTable';
import { SaveDateService } from 'src/app/services/save-date.service';
import { CreateEventComponent } from '../create-event/create-event.component';
import { VisualizeEventComponent } from '../visualize-event/visualize-event.component';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.less'],
})
export class CalenderComponent implements OnInit {
  @ViewChild(MatTable) table!: MatTable<any>;
  selectedDate: Date | undefined;
  dataSource: EventTable[] = [
    {
      Hour: '0 AM',
      Event: { Title: '', Date: new Date(), Duration: 0, Description: '' },
    },
    {
      Hour: '1 AM',
      Event: { Title: '', Date: new Date(), Duration: 0, Description: '' },
    },
    {
      Hour: '2 AM',
      Event: { Title: '', Date: new Date(), Duration: 0, Description: '' },
    },
    {
      Hour: '3 AM',
      Event: { Title: '', Date: new Date(), Duration: 0, Description: '' },
    },
    {
      Hour: '4 AM',
      Event: { Title: '', Date: new Date(), Duration: 0, Description: '' },
    },
    {
      Hour: '5 AM',
      Event: { Title: '', Date: new Date(), Duration: 0, Description: '' },
    },
    {
      Hour: '6 AM',
      Event: { Title: '', Date: new Date(), Duration: 0, Description: '' },
    },
    {
      Hour: '7 AM',
      Event: { Title: '', Date: new Date(), Duration: 0, Description: '' },
    },
    {
      Hour: '8 AM',
      Event: { Title: '', Date: new Date(), Duration: 0, Description: '' },
    },
    {
      Hour: '9 AM',
      Event: { Title: '', Date: new Date(), Duration: 0, Description: '' },
    },
    {
      Hour: '10 AM',
      Event: { Title: '', Date: new Date(), Duration: 0, Description: '' },
    },
    {
      Hour: '11 AM',
      Event: { Title: '', Date: new Date(), Duration: 0, Description: '' },
    },
    {
      Hour: '1 PM',
      Event: { Title: '', Date: new Date(), Duration: 0, Description: '' },
    },
    {
      Hour: '2 PM',
      Event: { Title: '', Date: new Date(), Duration: 0, Description: '' },
    },
    {
      Hour: '3 PM',
      Event: { Title: '', Date: new Date(), Duration: 0, Description: '' },
    },
    {
      Hour: '4 PM',
      Event: { Title: '', Date: new Date(), Duration: 0, Description: '' },
    },
    {
      Hour: '5 PM',
      Event: { Title: '', Date: new Date(), Duration: 0, Description: '' },
    },
    {
      Hour: '6 PM',
      Event: { Title: '', Date: new Date(), Duration: 0, Description: '' },
    },
    {
      Hour: '7 PM',
      Event: { Title: '', Date: new Date(), Duration: 0, Description: '' },
    },
    {
      Hour: '8 PM',
      Event: { Title: '', Date: new Date(), Duration: 0, Description: '' },
    },
    {
      Hour: '9 PM',
      Event: { Title: '', Date: new Date(), Duration: 0, Description: '' },
    },
    {
      Hour: '10 PM',
      Event: { Title: '', Date: new Date(), Duration: 0, Description: '' },
    },
    {
      Hour: '11 PM',
      Event: { Title: '', Date: new Date(), Duration: 0, Description: '' },
    },
  ];

  columns = [
    {
      columnDef: 'hour',
      header: 'Hour',
      cell: (element: EventTable) => `${element.Hour}`,
    },
    {
      columnDef: 'event',
      header: 'Event',
      cellContent: (element: EventTable) => `${element.Event.Title}`,
      cellHour: (element: EventTable) => `${element.Hour}`,
    },
  ];

  displayedColumns = this.columns.map((c) => c.columnDef);

  constructor(
    private saveDateService: SaveDateService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.recalibrateTable();
  }

  recalibrateTable() {
    this.dataSource.forEach((element) => {
      element.Event.Title = '';
      element.Event.Date = new Date();
      element.Event.Duration = 0;
      element.Event.Description = '';
      const first = JSON.parse(
        this.saveDateService.getDate(this.selectedDate + element.Hour)!
      );
      element.Event = first != null ? first : element.Event;
    });
  }

  drag(event: any) {
    this.dataSource[event.previousIndex].Event.Date = new Date(
      this.dataSource[event.previousIndex].Event.Date
    );
    this.dataSource[event.previousIndex].Event.Date = new Date(
      this.dataSource[event.previousIndex].Event.Date.setHours(
        parseInt(this.dataSource[event.currentIndex].Hour.split(' ')[0])
      )
    );
    this.saveDateService.removeDate(
      this.selectedDate + this.dataSource[event.previousIndex].Hour
    );
    this.saveDateService.saveDate(
      this.selectedDate + this.dataSource[event.currentIndex].Hour,
      this.dataSource[event.previousIndex].Event
    );
    this.recalibrateTable();
  }

  openDialogCreate(app: any) {
    const dialogRef = this.dialog.open(CreateEventComponent, {
      data: {
        date: this.selectedDate,
        hour: app,
      },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.recalibrateTable();
    });
  }

  openDialogVisualize(app: any) {
    const dialogRef = this.dialog.open(VisualizeEventComponent, {
      data: {
        date: this.selectedDate + app,
        hour: app,
      },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.recalibrateTable();
    });
  }
}
