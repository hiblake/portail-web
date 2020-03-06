import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Document } from 'src/app/document';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

constructor(private document: AngularFirestore ) {


 }

  getDocuments() {
    return this.document.collection('documents').snapshotChanges();
  }

  createDocument(auteur: string , dateEdition: string , titre: string) {
    let documentList: any;
    documentList = Object.assign({}, {
        auteur,
        dateEdition,
        titre
    });
    console.log(documentList);
    return this.document.collection('documents').add(documentList);

  }

  updateDocument(document: Document) {
    delete document.id;
    this.document.doc('documents/' + document.id).update(document);
  }


  deletePolicy(documentID: string) {
    this.document.doc('documents/' + documentID).delete();
  }
}
