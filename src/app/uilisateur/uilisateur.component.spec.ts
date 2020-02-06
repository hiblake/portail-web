import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UilisateurComponent } from './uilisateur.component';

describe('UilisateurComponent', () => {
  let component: UilisateurComponent;
  let fixture: ComponentFixture<UilisateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UilisateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
