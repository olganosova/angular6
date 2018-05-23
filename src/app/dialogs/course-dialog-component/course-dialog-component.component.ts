import {Component, OnInit, Inject, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, Validators, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {BroadcasterService} from "../../common/services/broadcaster.service";
import {HttpService} from "../../common/services/http.service";
import { Store } from "@ngrx/store";

import {State} from "../../state-management/state/main-state";
import { SAVE_DIALOG } from "../../state-management/actions/main-action-creator";


@Component({
  selector: 'app-course-dialog-component',
  templateUrl: './course-dialog-component.component.html',
  styleUrls: ['./course-dialog-component.component.scss'],
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
