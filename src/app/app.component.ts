import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'skillsWorkflow-form';
  formResult;

  // Json para contruir o Form
  public jsonFields = [
    {
      type: 'text',
      label: 'Nome Completo',
      name: 'nome',
      value: ''
    },
    {
      type: 'text',
      label: 'Morada',
      name: 'morada',
      value: ''
    },
    {
      type: 'selection',
      label: 'País',
      name: 'pais',
      values: [
        { value: 'pt', label: 'Portugal' },
        { value: 'es', label: 'Espanha' },
        { value: 'fr', label: 'França' }
      ]
    },
    {
      type: 'selection',
      label: 'Cidade',
      name: 'cidade',
      values: [
        { value: 'lis', label: 'Lisboa' },
        { value: 'por', label: 'Porto' },
        { value: 'vis', label: 'Viseu' }
      ]
    },
    {
      type: 'list',
      label: 'Hobbies',
      name: 'hobbies',
      values: [
        { value: 'ler', label: 'Ler' },
        { value: 'desporto', label: 'Desporto' },
        { value: 'jogar', label: 'Jogar' },
        { value: 'jardinagem', label: 'Jardinagem' }
      ]
    },
  ];

  // Recebe valores do form via Output Event
  getFormValues(values) {
    console.log('father', values);
    this.formResult = JSON.stringify(values) ;
  }
}
