import { Component } from '@angular/core';
import { Utilisateur } from './utilisateur';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portail-web';

  utilisateur: Utilisateur = {
    nom: 'Hiba',
    prenom: 'Filali',
    email: 'hiba@gmail.com',
    role: 'etudiante',
    url: 'local'
  };
}
