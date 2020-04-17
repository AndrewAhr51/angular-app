import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerForm: FormGroup;

  constructor(private fb: FormBuilder) { }
  sendCatalogBool: boolean;
  ngOnInit() {
    this.customerForm = this.fb.group({
      firstName:'',
      lastName:'',
      email: '',
      sendCatalog: true
    })
  }

  save() {
    console.log(this.customerForm);
    console.log('Saved ' + JSON.stringify(this.customerForm.value));
  }
}
