import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EncuentraViajesPage } from './encuentra-viajes.page';

describe('EncuentraViajesPage', () => {
  let component: EncuentraViajesPage;
  let fixture: ComponentFixture<EncuentraViajesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuentraViajesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
