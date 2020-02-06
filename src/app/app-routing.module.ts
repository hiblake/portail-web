import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  { path: '',  component: HomeComponent }  ,
  { path: 'utilisateur',    component: UtilisateursComponent },
    { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
