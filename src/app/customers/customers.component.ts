import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers = [
    {id: '1', FirstName: 'Mandy', LastName: 'Lou', Contact: "0273458902", Address: '123 Mustard Street', Email: 'mandyl@io.com'},
    {id: '2', FirstName: 'Stephen', LastName: 'Hawkings', Contact: '0543237894', Address: '34 Dzorwulu Avenue', Email: 'stephenh@net.com'},
    {id: '3', FirstName: 'Lucy', LastName: 'Goodman', Contact: '001456892345', Address: '56 Cantoment Avenue Street', Email: 'goodmanl@gmail.com'}
  ]

  constructor() { }


  ngOnInit() {
  }

}
