import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WhatidoComponent } from './components/what-i-do/whatido.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DeployComponent } from './components/deploy/deploy.component';
import { ServerMonitorComponent } from './components/server-monitor/server-monitor.component';
import { SibComponent } from './components/sib/sib.component';

@NgModule({
  declarations: [
    AppComponent,
    WhatidoComponent,
    routingComponents,
    FooterComponent,
    NavbarComponent,
    DeployComponent,
    ServerMonitorComponent,
    SibComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    AppRoutingModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
