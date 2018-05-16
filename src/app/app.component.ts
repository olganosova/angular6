import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { Observable } from 'rxjs';

import { CourseDialogComponentComponent } from './dialogs/course-dialog-component/course-dialog-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  isHandset: Observable<BreakpointState>;

  constructor(private breakpointObserver: BreakpointObserver, private dialog: MatDialog) {}

  ngOnInit() {
    this.isHandset = this.breakpointObserver.observe(Breakpoints.Handset);
  }
  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: 1,
      description: 'Angular For Beginners'
    };

    const dialogRef = this.dialog.open(CourseDialogComponentComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data)
    );
  }


}
