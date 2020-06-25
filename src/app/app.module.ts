import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ArrayFormComponent } from './array-form/array-form.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AppRoutingModule } from './app-routing.module';
import { RangePickerComponent } from './range-picker/range-picker.component';
import { MomentDateAdapter, MatMomentDateModule } from '@angular/material-moment-adapter';
@NgModule({
  declarations: [
    AppComponent,
    BasicFormComponent,
    NestedFormComponent,
    DynamicFormComponent,
    ArrayFormComponent,
    ToolbarComponent,
    RangePickerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,    
    MatInputModule, 
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatToolbarModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
