import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControladorApiPage } from './controlador-api.page';
import { IonicStorageModule } from '@ionic/storage-angular';
import { provideHttpClient } from '@angular/common/http';

describe('ControladorApiPage', () => {
  let component: ControladorApiPage;
  let fixture: ComponentFixture<ControladorApiPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicStorageModule.forRoot()],
      providers: [provideHttpClient()]
    })
    fixture = TestBed.createComponent(ControladorApiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
