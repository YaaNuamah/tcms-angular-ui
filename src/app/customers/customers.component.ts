import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customers } from '../customers';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

    customers: Customers[];


  constructor(private customerservice: CustomerService) { }

 

  getCustomers(): void {
    this.customerservice.getCustomers()
      .subscribe(data => this.customers = data);
        }
        
    ngOnInit() {
          this.getCustomers();
          
   }
  
  }



