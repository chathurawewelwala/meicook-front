import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss'],
})
export class AddClientComponent implements OnInit {
  result:any
  body = {
    account: [
      {
        account: 'string',
        balance: 0,
        currency: 'string',
      },
    ],
    fname: 'string',
    lname: 'string',
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
  addClient(
    fName: string,
    sName: string,
    account: string,
    balance: number,
    currency: string
  ) {
    console.log(fName, sName, account, balance, currency);
    this.body.fname = fName;
    this.body.lname = sName;
    this.body.account[0].account = account;
    this.body.account[0].balance = balance;
    this.body.account[0].currency = currency;

    this.http
      .post('http://localhost:8080/meicook-dev/client/addClient', this.body)
      .subscribe((res) => {
        this.result = JSON.stringify(res)
      });
  }
}
