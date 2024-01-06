import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { DinamicPageComponent } from './pages/dinamic-page/dinamic-page.component';
import { SwitchePagesComponent } from './pages/switche-pages/switche-pages.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'basic',
                component: BasicPageComponent,
            },
            {
                path: 'dynamic',
                component: DinamicPageComponent,
            },
            {
                path: 'switches',
                component: SwitchePagesComponent,
            },
            {
                path: '**',
                redirectTo: 'basic',
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ReactiveRoutingModule {}
