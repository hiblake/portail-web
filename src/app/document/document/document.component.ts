import { Document } from 'src/app/document';
import { DocumentService } from './../../document.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  constructor(private documentService: DocumentService) { }
  document: Document[];
  ngOnInit() {

    this.documentService.getDocuments().subscribe(data => {
      this.document = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {}
        } as Document;
      })
    });

  }



update(document: Document) {
  this.documentService.updateDocument(document);
}

delete(id: string) {
  this.documentService.deletePolicy(id);
}

}
