import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeseroPedidoComponent } from './mesero-pedido.component';

describe('MeseroPedidoComponent', () => {
  let component: MeseroPedidoComponent;
  let fixture: ComponentFixture<MeseroPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeseroPedidoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeseroPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
