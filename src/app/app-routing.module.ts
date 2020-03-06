import { DocumentADDComponent } from './documentADD/documentADD.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentComponent } from './document/document/document.component';



const routes: Routes = [
  { path: '',  component: HomeComponent }  ,
  { path: 'utilisateur',    component: UtilisateursComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'document', component: DocumentComponent },
    { path: 'documentADD', component: DocumentADDComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
