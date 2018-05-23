# Angular6Start

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

node -v
v8.11.1
npm -v
6.0.0
npm install -g @angular/cli
ng new angular6-start
ng serve --host 0.0.0.0 --port 3000

SASS:
npm install node-sass --save-dev
in angular.json:
"schematics": {
        "@schematics/angular:component": {
          "styleext": "scss"
        }
      },
       "styles": [
                      "src/styles.scss"
                    ],
                    
MATERIAL
ng add @angular/material
app.module.ts:
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

BOOTSTRAP:
ng add @ng-bootstrap/schematics
in styles.scss: @import '~bootstrap/dist/css/bootstrap.css';

NgRx STORE
ng add @ngrx/store @ngrx/router-store @ngrx/effects @ngrx/store-devtools @ngrx/entity ngrx-store-freeze
http://brianflove.com/2018/01/09/ngrx-getting-started/
