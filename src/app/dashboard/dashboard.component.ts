import { Component, OnInit, ViewChild } from '@angular/core';
import {MatMenuTrigger} from "@angular/material";
import { Store } from "@ngrx/store";
import {State} from "../state-management/state/main-state";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  stateKeeper: any ='';
  savedForm: any;

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  constructor(private store:Store<State>) {
    store.select('mainStoreReducer')
      .subscribe( (data:State )=> {
        this.stateKeeper = 'data is ' + data.counter;
        this.savedForm = data.courseForm;

      });
  }

  ngOnInit() {
  }

  openMenu() {
    this.trigger.openMenu();
  }

}
