import { Routes } from '@angular/router';
import { HomeComponent } from './features/homeLayout/home/home.component';
import { ChartsComponent } from './features/charts/charts/charts.component';

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
