import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSkillsComponent } from './header-skills.component';

describe('HeaderSkillsComponent', () => {
  let component: HeaderSkillsComponent;
  let fixture: ComponentFixture<HeaderSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
