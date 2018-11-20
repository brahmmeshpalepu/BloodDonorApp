import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BlooddonationcampComponent } from './blooddonationcamp/blooddonationcamp.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavAreaComponent } from './nav-area/nav-area.component';

const routes:Routes = [

  { path:'contactus',component: ContactusComponent },
  { path:'login',component: LoginComponent },
  { path: 'home' ,component: HomeComponent },
  { path: 'signup' ,component: SignupComponent },
  { path: 'aboutus' ,component: AboutusComponent },
  { path: 'blooddonationcamp' ,component: BlooddonationcampComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

]
@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    BlooddonationcampComponent,
    LoginComponent,
    SignupComponent,
    NavAreaComponent
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
