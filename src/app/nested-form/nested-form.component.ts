import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.scss']
})
export class NestedFormComponent implements OnInit {
  
  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    const phone = this.fb.group({
      area: [],
      prefix: [],
      line: [],
    })
    const address = this.fb.group({
      street: [],
      city: [],
      zip: [],
    })
    this.myForm = this.fb.group({
      email: '',
      addr: address,
      homePhone: phone,
      cellPhone: phone,
    })
  }

}
