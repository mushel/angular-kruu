import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { ArrayFormComponent } from './array-form/array-form.component';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

const routes: Routes = [
  // { path: '', redirectTo:basic-form', pathMatch: 'full'},
  { path: 'basic-form', component: BasicFormComponent},
  { path: 'dynamic-form', component: DynamicFormComponent },
  { path: 'array-form', component: ArrayFormComponent },
  { path: 'nested-form', component: NestedFormComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {
 
 }

