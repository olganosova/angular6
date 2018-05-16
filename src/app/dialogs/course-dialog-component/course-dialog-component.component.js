"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var material_1 = require("@angular/material");
var CourseDialogComponentComponent = (function () {
    function CourseDialogComponentComponent(fb, dialogRef, data) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.description = data.description;
    }
    CourseDialogComponentComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            description: [this.description, []]
        });
    };
    CourseDialogComponentComponent.prototype.save = function () {
        this.dialogRef.close(this.form.value);
    };
    CourseDialogComponentComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    CourseDialogComponentComponent = __decorate([
        core_1.Component({
            selector: 'app-course-dialog-component',
            templateUrl: './course-dialog-component.component.html',
            styleUrls: ['./course-dialog-component.component.scss']
        }),
        __param(2, core_1.Inject(material_1.MAT_DIALOG_DATA))
    ], CourseDialogComponentComponent);
    return CourseDialogComponentComponent;
}());
exports.CourseDialogComponentComponent = CourseDialogComponentComponent;
//# sourceMappingURL=course-dialog-component.component.js.map