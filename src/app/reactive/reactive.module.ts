import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveRoutingModule } from './reactive-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { DinamicPageComponent } from './pages/dinamic-page/dinamic-page.component';
import { SwitchePagesComponent } from './pages/switche-pages/switche-pages.component';


@NgModule({
    declarations: [
        BasicPageComponent,
        DinamicPageComponent,
        SwitchePagesComponent,
    ],
    imports: [CommonModule, ReactiveRoutingModule,ReactiveFormsModule],
})
export class ReactiveModule {}
