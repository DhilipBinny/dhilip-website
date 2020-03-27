import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatelistsexpansionComponent } from './certificatelistsexpansion.component';

describe('CertificatelistsexpansionComponent', () => {
  let component: CertificatelistsexpansionComponent;
  let fixture: ComponentFixture<CertificatelistsexpansionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificatelistsexpansionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificatelistsexpansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
