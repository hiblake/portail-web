import { Injectable } from '@angular/core';
import { Utilisateur } from './utilisateur';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {

  constructor() {}

    getUtilisateurs(): Observable<Utilisateur[]> {
      return of([{
        nom: 'Hiba',
        prenom: 'Filali',
        email: 'hiba@gmail.com',
        role: 'etudiante',
        url: 'local'
      },
      ]);
    }
}

