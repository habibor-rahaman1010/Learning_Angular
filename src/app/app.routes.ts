import { Routes } from '@angular/router';
import { CreateModule } from './Feature/app-modules/create-module/create-module';
import { Notfound } from './Share/notfound/notfound';

export const routes: Routes = [
    {path:'', component: CreateModule},
    {path: '**', component: Notfound}
];
