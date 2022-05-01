import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureRouterComponent } from './feature-router.component';

describe('FeatureRouterComponent', () => {
  let component: FeatureRouterComponent;
  let fixture: ComponentFixture<FeatureRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureRouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
