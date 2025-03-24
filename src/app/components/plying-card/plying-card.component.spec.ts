import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlyingCardComponent } from './plying-card.component';

describe('PlyingCardComponent', () => {
  let component: PlyingCardComponent;
  let fixture: ComponentFixture<PlyingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlyingCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlyingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
