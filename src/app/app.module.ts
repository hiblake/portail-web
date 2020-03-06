import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { LoginComponent } from './pages/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UilisateurComponent } from './uilisateur/uilisateur.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { HomeComponent } from './home/home.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from '../app/core/auth.service';
import { RouterModule } from '@angular/router';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { DocumentComponent } from './document/document/document.component';
import { DocumentADDComponent } from './documentADD/documentADD.component';

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      MenuComponent,
      DashboardComponent,
      UilisateurComponent,
      UtilisateursComponent,
      DocumentADDComponent,
      DocumentComponent,
      HomeComponent,
      DocumentADDComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatSliderModule,
      MatInputModule,
      MatFormFieldModule,
      MatButtonModule,
      MatCardModule,
      ReactiveFormsModule,
      LayoutModule,
      MatToolbarModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireAuthModule,
      AngularFirestoreModule
   ],
   providers: [
      AuthService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
