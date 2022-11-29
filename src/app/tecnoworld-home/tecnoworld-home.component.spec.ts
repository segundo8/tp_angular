import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnoworldHomeComponent } from './tecnoworld-home.component';

describe('TecnoworldHomeComponent', () => {
  let component: TecnoworldHomeComponent;
  let fixture: ComponentFixture<TecnoworldHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnoworldHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnoworldHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
