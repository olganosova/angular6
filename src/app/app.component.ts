import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {MatDialog, MatDialogConfig} from "@angular/material";
import {Observable} from 'rxjs';

import {CourseDialogComponentComponent} from './dialogs/course-dialog-component/course-dialog-component.component';
import {HttpService} from './common/services/http.service';
import {ConfigService} from './common/services/config.service';
import {BroadcasterService} from "./common/services/broadcaster.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  isHandset: Observable<BreakpointState>;
  optionSelection: string;
  favoriteSeason: string;
  config: any;
  errorMessage:string = '';

  seasons = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];
  options = [
    '1',
    '2'
  ]


  constructor(private breakpointObserver: BreakpointObserver,
              private broadCaster: BroadcasterService,
              private dialog: MatDialog,
              public httpService: HttpService,
              public configServ: ConfigService) {
  }

  ngOnInit() {
    this.isHandset = this.breakpointObserver.observe(Breakpoints.Handset);
    this.optionSelection = "2";
    this.favoriteSeason = 'Spring';

    this.broadCaster.configDataUpdated.subscribe(
      value => {
         this.config = value;
      }
    );
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.position = {
      top: '100px',
      left: '300px'
    };

    dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners',
      description: 'Descr 1',
      category: 'INTERMEDIATE',
      complexity: '2'
    };

    const dialogRef = this.dialog.open(CourseDialogComponentComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data)
    );
  }

  getJSON(): any {
    this.httpService.getConfig()
      .subscribe((data) => {
        if(data.errorCaught){
          this.errorMessage = data.errorCaught;
          return;
        }
          this.config = {
            userPreferences: data['userPreferences'],
            refHolidays: data['refHolidays']
          };
          this.broadCaster.loadConfig(data);
          console.log(this.config);
        },
    err => console.log(err)
      );


  }


}
