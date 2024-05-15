import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MarriageComponent } from './marriage/marriage.component';
import { EstalamComponent } from './estalam/estalam.component';
import { MoamlaComponent } from './moamla/moamla.component';
// import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ArdmarriComponent } from './ardmarri/ardmarri.component';
import { ArdestalamComponent } from './ardestalam/ardestalam.component';
import { ArdmoamlaComponent } from './ardmoamla/ardmoamla.component';
import { FormsModule } from '@angular/forms';
import { RemoveTimeFromDatePipe } from './pipes/remove-time-from-date.pipe';

// import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MarriageComponent,
    EstalamComponent,
    MoamlaComponent,
    ArdmarriComponent,
    ArdestalamComponent,
    ArdmoamlaComponent,
    RemoveTimeFromDatePipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
