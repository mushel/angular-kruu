import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
@Component({
  selector: 'array-form',
  templateUrl: './array-form.component.html',
  styleUrls: ['./array-form.component.scss']
})
export class ArrayFormComponent implements OnInit {
  
  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: '',
      jobs: this.fb.array([])
    })
  }

  get jobsForms() {
    return this.myForm.get('jobs') as FormArray
  }

  addJobs() {

    const jobs = this.fb.group({
      coName: [],
      position: [],
      start: [],
      end: [],
    })
    this.jobsForms.push(jobs);
  }
  
  deleteJobs(i) {
    this.jobsForms.removeAt(i)
  }
}
