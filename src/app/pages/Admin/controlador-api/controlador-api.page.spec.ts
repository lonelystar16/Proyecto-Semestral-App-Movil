import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControladorApiPage } from './controlador-api.page';

describe('ControladorApiPage', () => {
  let component: ControladorApiPage;
  let fixture: ComponentFixture<ControladorApiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ControladorApiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
