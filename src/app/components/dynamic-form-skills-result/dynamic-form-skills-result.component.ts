import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-form-skills-result',
  templateUrl: './dynamic-form-skills-result.component.html',
  styleUrls: ['./dynamic-form-skills-result.component.scss']
})
export class DynamicFormSkillsResultComponent implements OnInit {
  @Input() formResult = [];
  constructor() { }

  ngOnInit(): void {
  }

}
