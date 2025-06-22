import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeseroMesasComponent } from './mesero-mesas.component';

describe('MeseroMesasComponent', () => {
  let component: MeseroMesasComponent;
  let fixture: ComponentFixture<MeseroMesasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeseroMesasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeseroMesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
