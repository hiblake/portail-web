import { DocumentService } from './../document.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router, Params } from '@angular/router';
@Component({
  selector: 'app-documentADD',
  templateUrl: './documentADD.component.html',
  styleUrls: ['./documentADD.component.css']
})
export class DocumentADDComponent implements OnInit {
  angForm: FormGroup;
  constructor(private documentService: DocumentService,private fb: FormBuilder , private router:Router) {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      price: ['', Validators.required ]
   });
   }

  ngOnInit() {
  }



  create(auteur: string , dateEdition: string, titre: string){
    this.documentService.createDocument(auteur, dateEdition, titre);
    this.router.navigate(['/document']);
  }
}
