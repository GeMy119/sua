import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MarriageComponent } from './marriage/marriage.component';
import { EstalamComponent } from './estalam/estalam.component';
import { MoamlaComponent } from './moamla/moamla.component';
import { ArdmarriComponent } from './ardmarri/ardmarri.component';
import { ArdestalamComponent } from './ardestalam/ardestalam.component';
import { ArdmoamlaComponent } from './ardmoamla/ardmoamla.component';
import { ArdVisitComponent } from './ard-visit/ard-visit.component';
import { FindVisitComponent } from './find-visit/find-visit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'marriage', component: MarriageComponent },
  { path: 'estalam', component: EstalamComponent },
  { path: 'moamla', component: MoamlaComponent },
  { path: 'ardmarri', component: ArdmarriComponent },
  { path: 'ardestalam', component: ArdestalamComponent },
  { path: 'ardmoamla', component: ArdmoamlaComponent },
  { path: 'visit-show', component: ArdVisitComponent },
  { path: 'visit-find', component: FindVisitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
