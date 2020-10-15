import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { WorkComponent } from './components/work/work.component';
import { DeployComponent } from './components/deploy/deploy.component';
import { ServerMonitorComponent } from './components/server-monitor/server-monitor.component';
import { SibComponent } from './components/sib/sib.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'portfolio', component: WorkComponent },
  { path: 'about', component: AboutComponent },
  { path: 'deployment-dashboard', component: DeployComponent },
  { path: 'server-monitor', component: ServerMonitorComponent },
  { path: 'self-image-beauty', component: SibComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export  const routingComponents = [HomeComponent, AboutComponent, WorkComponent, DeployComponent, ServerMonitorComponent, SibComponent]
