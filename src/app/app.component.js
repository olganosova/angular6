"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var layout_1 = require('@angular/cdk/layout');
var material_1 = require("@angular/material");
var course_dialog_component_component_1 = require('./dialogs/course-dialog-component/course-dialog-component.component');
var AppComponent = (function () {
    function AppComponent(breakpointObserver, dialog) {
        this.breakpointObserver = breakpointObserver;
        this.dialog = dialog;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.isHandset = this.breakpointObserver.observe(layout_1.Breakpoints.Handset);
    };
    AppComponent.prototype.openDialog = function () {
        var dialogConfig = new material_1.MatDialogConfig();
        dialogConfig.position = {
            'top': '20',
            left: '20'
        };
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            id: 1,
            title: 'Angular For Beginners'
        };
        this.dialog.open(course_dialog_component_component_1.CourseDialogComponentComponent, dialogConfig);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map