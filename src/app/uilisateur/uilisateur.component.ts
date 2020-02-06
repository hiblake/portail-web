import { Component, OnInit, Input } from '@angular/core';
import { Utilisateur } from '../utilisateur';


@Component({
  selector: 'app-uilisateur',
  templateUrl: './uilisateur.component.html',
  styleUrls: ['./uilisateur.component.scss']
})
export class UilisateurComponent implements OnInit {

@Input()
public utilisateur: Utilisateur;

  constructor() { }

  ngOnInit() {
  }

}
