import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudMeserosComponent } from './crud-meseros.component';

describe('CrudMeserosComponent', () => {
  let component: CrudMeserosComponent;
  let fixture: ComponentFixture<CrudMeserosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudMeserosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudMeserosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
