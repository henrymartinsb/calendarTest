import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalenderRoutingModule } from './calender-routing.module';
import { CalenderComponent } from './components/calender/calender.component';
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { CreateEventComponent } from './components/create-event/create-event.component';
import { VisualizeEventComponent } from './components/visualize-event/visualize-event.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    CalenderComponent,
    CreateEventComponent,
    VisualizeEventComponent
  ],
  imports: [
    CommonModule,
    CalenderRoutingModule,
    MatCardModule,
    MatTableModule,
    MatDatepickerModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    DragDropModule
  ]
})
export class CalenderModule { }
