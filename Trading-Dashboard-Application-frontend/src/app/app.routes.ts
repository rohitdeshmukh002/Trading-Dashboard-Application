import { Routes } from '@angular/router';
import { ChartsComponent } from './features/charts/charts/charts.component';
import { HomeComponent } from './features/homeLayout/home/home.component';

export const routes: Routes = [

    {
        path : ' ',
        component : ChartsComponent,
        children :[
            {
                path : '',
                redirectTo: '/home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component : HomeComponent
            }
        ]

    }
];
