import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutokListaComponent } from './autok-lista.component';

describe('AutokListaComponent', () => {
  let component: AutokListaComponent;
  let fixture: ComponentFixture<AutokListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutokListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutokListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
