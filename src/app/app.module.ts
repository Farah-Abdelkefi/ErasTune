import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapService } from './services/map.service';
import { HttpClientModule } from '@angular/common/http';
import { ZoomComponent } from "./components/zoom/zoom.component";
import { ZoomService } from './services/zoom.service';
import { MapComponent } from './components/map/map.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { MusicplayerComponent } from './components/musicplayer/musicplayer.component';


import {SplashScreenComponent} from './components/splash-screen/splash-screen.component'


@NgModule({
    declarations: [
        AppComponent,
        ZoomComponent,
        MapComponent,
        MusicplayerComponent,
        SplashScreenComponent,
        LandingpageComponent

    ],
    providers: [MapService,ZoomService],
    bootstrap: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,


    ]
})
export class AppModule {

}
