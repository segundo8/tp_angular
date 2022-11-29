import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnoworldAboutComponent } from './tecnoworld-about.component';

describe('TecnoworldAboutComponent', () => {
  let component: TecnoworldAboutComponent;
  let fixture: ComponentFixture<TecnoworldAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnoworldAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnoworldAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
