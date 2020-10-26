# Angular Dynamic Form Challenge

## NPM packages

* `npm install --save @angular/material @angular/cdk`.
* `npm install @angular/flex-layout --save`.

## Components

##### Header Skills
**Descrição**: Cabeçalho do projeto.
**Input**: Titulo do cabeçalho
```html
<app-header-skills [title]="'Angular Dynamic Form Challenge'"></app-header-skills>
```

##### Dynamic Form Skills
**Descrição**: Componente que constroi formulário dinamicamente.
Os campos do formulário podem ser de 3 tipos
* text
* selection
* list

**Input**: JSON com a definição do formulário a construir.
```json
  jsonFields = [
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
  ```

**Output**: Valores do formulário.
```html
<app-dynamic-form-skills [jsonFields]="jsonFields" (newformValues)="getFormValues($event)"></app-dynamic-form-skills>
```

##### Dynamic Form Skills Result
**Descrição**: Valores preenchidos no formulário dinamico.
**Input**: Resultado do formulário.
```html
<app-dynamic-form-skills-result [formResult]="formResult"></app-dynamic-form-skills-result>
```

