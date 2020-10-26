import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-skills',
  templateUrl: './dynamic-form-skills.component.html',
  styleUrls: ['./dynamic-form-skills.component.scss']
})
export class DynamicFormSkillsComponent implements OnInit {
  @Input() jsonFields = [];
  @Output() newformValues = new EventEmitter<any>();
  form: FormGroup;
  constructor() { }

  ngOnInit(): void {
    const control = {};

    // Controi controladores com base no JSON
    for (const field of this.jsonFields) {
      control[field.name] = new FormControl(field.value);
    }

    this.form = new FormGroup(control);
    this.getFormValues();
  }

  // Obtem valores do formulario
  getFormValues() {
    this.form.valueChanges.subscribe( values => {
      // Emite Valores
      this.newformValues.emit(values);
    });
  }

  resetForm(){
    this.form.reset();
    this.newformValues.emit(undefined);
  }

}
