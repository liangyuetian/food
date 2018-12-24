import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { AppRoutingModule } from 'src/router';
import { AppComponent } from './app.component';
import { EggplantComponent } from '../view/eggplant/eggplant.component';
import { RadishComponent } from '../view/radish/radish.component';

@NgModule({
    declarations: [
        AppComponent,
        EggplantComponent,
        RadishComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
