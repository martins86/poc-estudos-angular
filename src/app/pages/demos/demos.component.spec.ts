import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { DemosComponent } from './demos.component';
import { DemosModule } from './demos.module';

describe('DemosComponent', () => {
  let component: DemosComponent;
  let fixture: ComponentFixture<DemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, BrowserAnimationsModule, DemosModule],
      declarations: [DemosComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemosComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
