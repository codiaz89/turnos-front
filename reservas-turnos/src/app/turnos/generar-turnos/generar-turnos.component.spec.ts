import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarTurnosComponent } from './generar-turnos.component';

describe('GenerarTurnosComponent', () => {
  let component: GenerarTurnosComponent;
  let fixture: ComponentFixture<GenerarTurnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerarTurnosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerarTurnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
