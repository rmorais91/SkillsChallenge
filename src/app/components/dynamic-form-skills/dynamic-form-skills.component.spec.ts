import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormSkillsComponent } from './dynamic-form-skills.component';

describe('DynamicFormSkillsComponent', () => {
  let component: DynamicFormSkillsComponent;
  let fixture: ComponentFixture<DynamicFormSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
