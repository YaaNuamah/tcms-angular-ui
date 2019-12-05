import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-editor',
  templateUrl: './customer-editor.component.html',
  styleUrls: ['./customer-editor.component.css']
})
export class CustomerEditorComponent implements OnInit {

  profileForm = new FormGroup({
    customer_address : new FormControl(''),
    customer_email: new FormControl(''),
    customer_level: new FormControl(''),
    customer_name:  new FormControl(''),
    customer_telephone:  new FormControl('')
  
  });

    level = ['Gold', 'Platinum', 'Premium']
  
  
    constructor(private customerService: CustomerService ) { 
    }

    //Step 1
      msg: string = null;

    onSubmit() {
        if (this.profileForm.valid) {

      this.customerService.addCustomer(this.profileForm.value)
        .subscribe(
          data => {
          
            console.log("Customer added!")
            console.log("Form Submitted!");
            console.warn(this.profileForm.value);
          }
        )
        this.profileForm.reset();
        this.msg = "Customer successfully added!";


        // this.customerService.removeCustomer(this.profileForm.patchValue)

        }
      

      

      
    }
  ngOnInit() {
  }

}
