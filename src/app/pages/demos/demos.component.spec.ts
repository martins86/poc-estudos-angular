import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemosComponent } from './demos.component';
import { DemosModule } from './demos.module';

describe('DemosComponent', () => {
  let component: DemosComponent;
  let fixture: ComponentFixture<DemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemosModule],
      declarations: [DemosComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
