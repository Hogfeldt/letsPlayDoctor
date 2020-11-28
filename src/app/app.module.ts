import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {ScrollingModule} from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { JournalComponent } from './journal/journal.component';
import { MedicineComponent } from './medicine/medicine.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SplashComponent } from './splash/splash.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { ResultComponent } from './result/result.component';


const routes = [
  { path: '', component: SplashComponent },
  { path: 'play', component: GameComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    JournalComponent,
    MedicineComponent,
    SplashComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatDividerModule,
    MatButtonModule,
    MatButtonToggleModule,
    ScrollingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
