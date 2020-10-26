import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormSkillsComponent } from './dynamic-form-skills/dynamic-form-skills.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HeaderSkillsComponent } from './header-skills/header-skills.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { DynamicFormSkillsResultComponent } from './dynamic-form-skills-result/dynamic-form-skills-result.component';


@NgModule({
  declarations: [DynamicFormSkillsComponent, HeaderSkillsComponent, DynamicFormSkillsResultComponent],
  imports: [
    CommonModule,
    MatSliderModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatListModule,
    MatSelectModule,
    FlexLayoutModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    DynamicFormSkillsComponent,
    HeaderSkillsComponent,
    DynamicFormSkillsResultComponent
  ]
})
export class ComponentsModule { }
