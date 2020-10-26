import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormSkillsResultComponent } from './dynamic-form-skills-result.component';

describe('DynamicFormSkillsResultComponent', () => {
  let component: DynamicFormSkillsResultComponent;
  let fixture: ComponentFixture<DynamicFormSkillsResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormSkillsResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormSkillsResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
