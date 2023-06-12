/* eslint-disable */
import { Component, Inject } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SaveDateService } from 'src/app/services/save-date.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.less'],
})
export class CreateEventComponent {
  public eventForm = new UntypedFormGroup({
    Title: new UntypedFormControl(
      { value: '', disabled: false },
      Validators.compose([Validators.required])
    ),
    Date: new UntypedFormControl(
      { value: '', disabled: false },
      Validators.compose([Validators.required])
    ),
    Duration: new UntypedFormControl(
      { value: '', disabled: false },
      Validators.compose([Validators.required])
    ),
    Description: new UntypedFormControl(
      { value: '', disabled: false },
      Validators.compose([Validators.required])
    ),
  });

  constructor(
    private saveDateService: SaveDateService,
    @Inject(MAT_DIALOG_DATA) private _data: any
  ) {}

  InsertEvent() {
    const date = new Date(this._data.date);
    this.eventForm.get('Date')?.setValue(new Date(date.setHours(this._data.date.getHours() + this._data.hour.split(" ")[0])));
    this.saveDateService.saveDate(this._data.date + this._data.hour, this.eventForm.value)
  }
}
