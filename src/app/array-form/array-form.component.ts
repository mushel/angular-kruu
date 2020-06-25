import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'array-form',
  templateUrl: './array-form.component.html',
  styleUrls: ['./array-form.component.scss']
})
export class ArrayFormComponent implements OnInit {
  
  myForm: FormGroup;
  // date = new FormControl(new Date());
  // serializedDate = new FormControl((new Date()).toISOString());

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
      date: [],
      dateEnd: [],
    })
    this.jobsForms.push(jobs);
  }
  
  deleteJobs(i) {
    this.jobsForms.removeAt(i)
  }
}
