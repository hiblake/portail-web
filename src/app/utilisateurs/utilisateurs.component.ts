import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../utilisateur';
import { UtilisateursService } from '../utilisateurs.service';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss']
})
export class UtilisateursComponent implements OnInit {

  public utilisateurs: Utilisateur[];

  constructor(private utilisateurService: UtilisateursService) {


   }

  ngOnInit() {

      this.utilisateurService.getUtilisateurs() .subscribe(utilisateurs => this.utilisateurs = utilisateurs);
    }
  }


