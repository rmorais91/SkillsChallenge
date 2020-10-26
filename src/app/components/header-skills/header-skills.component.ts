import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-skills',
  templateUrl: './header-skills.component.html',
  styleUrls: ['./header-skills.component.scss']
})
export class HeaderSkillsComponent implements OnInit {
  @Input() title = [];
  constructor() { }

  ngOnInit(): void {
  }

}
