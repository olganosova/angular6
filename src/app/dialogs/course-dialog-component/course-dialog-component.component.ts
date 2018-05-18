import {Component, OnInit, Inject, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, Validators, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {BroadcasterService} from "../../common/services/broadcaster.service";
import {HttpService} from "../../common/services/http.service";


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
    @Inject(MAT_DIALOG_DATA) data) {
    this.objData = data;
  }

  ngOnInit() {
    this.form = this.fb.group({
      description: [this.objData.description, Validators.required],
      category: [this.objData.category, Validators.required],
      complexity: [this.objData.complexity, Validators.required],
      startDate: [null, Validators.required],
    });

  }


  save() {
    if(!this.form.valid){
      return;
    }
    this.getJSON();
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
