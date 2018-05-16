import {Component, OnInit, Inject} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-course-dialog-component',
  templateUrl: './course-dialog-component.component.html',
  styleUrls: ['./course-dialog-component.component.scss']
})
export class CourseDialogComponentComponent implements OnInit {
  form: FormGroup;
  description: string;
  objData: any = {};

  constructor(
    //private fb: FormBuilder,
    private dialogRef: MatDialogRef<CourseDialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.objData.description = data.description;
  }

  ngOnInit() {

  }


  save() {
    this.dialogRef.close(this.objData);
  }

  close() {
    this.dialogRef.close(null);
  }

}
