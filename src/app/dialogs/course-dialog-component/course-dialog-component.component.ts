import {Component, OnInit, Inject, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, Validators, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';


import {BroadcasterService} from "../../common/services/broadcaster.service";
import {HttpService} from "../../common/services/http.service";
import { Store } from "@ngrx/store";

import {State, SAVE_DIALOG} from "../../state-management/state/main-state";

import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports


const moment =  _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};



@Component({
  selector: 'app-course-dialog-component',
  templateUrl: './course-dialog-component.component.html',
  styleUrls: ['./course-dialog-component.component.scss'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS}
    ]
  // encapsulation: ViewEncapsulation.None,
})
export class CourseDialogComponentComponent implements OnInit {
  form: FormGroup;
  title: string;

  objData: any = {};

  constructor(
    private fb: FormBuilder,
    private broadCaster: BroadcasterService,
    public httpService: HttpService,
    private dialogRef: MatDialogRef<CourseDialogComponentComponent>,
    private store:Store<State>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.objData = data;
  }

  ngOnInit() {
    this.form = this.fb.group({
      description: [this.objData.description, [Validators.required,  Validators.minLength(4)]],
      category: [this.objData.category, Validators.required],
      complexity: [this.objData.complexity, Validators.required],
      startDate: [this.objData.startDate, Validators.required],
    });

  }

  save() {
    if(!this.form.valid){
      return;
    }

    this.store.dispatch({ type: SAVE_DIALOG, data:  this.form.value });
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close(null);
  }
  getJSON(): any {
    this.httpService.getConfig()
      .subscribe((data) => {
          if(data.errorCaught){
            return;
          }

          this.broadCaster.loadConfig(data);

        },
        err => console.log(err)
      );


  }

}
