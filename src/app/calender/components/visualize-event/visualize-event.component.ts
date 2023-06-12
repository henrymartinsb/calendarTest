/* eslint-disable */
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Event } from 'src/app/interfaces/event';
import { SaveDateService } from 'src/app/services/save-date.service';

@Component({
  selector: 'app-visualize-event',
  templateUrl: './visualize-event.component.html',
  styleUrls: ['./visualize-event.component.less']
})
export class VisualizeEventComponent implements OnInit {
  selectedEvent!: Event;
  endTime!: Date;
  hour!: string;

  constructor(
    private saveDateService: SaveDateService,
    @Inject(MAT_DIALOG_DATA) private _data: any
  ) {}

  ngOnInit(): void {
      this.selectedEvent = JSON.parse(this.saveDateService.getDate(this._data.date)!);
      this.selectedEvent.Date = new Date(this.selectedEvent.Date);
      this.endTime = new Date(this.selectedEvent.Date);
      this.endTime = new Date(this.endTime.setMinutes(this.selectedEvent.Date.getMinutes() + this.selectedEvent.Duration));
      this.hour = this._data.hour.split(" ")[''];
  }

  DeleteEvent() {
    this.saveDateService.removeDate(this._data.date);
  }
}
