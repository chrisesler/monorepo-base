import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeMonitorComponent } from './theme-monitor.component';

describe('ThemeMonitorComponent', () => {
  let component: ThemeMonitorComponent;
  let fixture: ComponentFixture<ThemeMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeMonitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
