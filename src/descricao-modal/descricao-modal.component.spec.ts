import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescricaoModalComponent } from './descricao-modal.component';

describe('DescricaoModalComponent', () => {
  let component: DescricaoModalComponent;
  let fixture: ComponentFixture<DescricaoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescricaoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescricaoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
