import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RadishComponent } from '../view/radish/radish.component';
import { EggplantComponent } from '../view/eggplant/eggplant.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'radish',
        pathMatch: 'prefix' //default
    },
    {
        path: 'radish',
        component: RadishComponent
    },
    {
        path: 'eggplant',
        component: EggplantComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
