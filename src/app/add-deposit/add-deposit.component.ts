import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-deposit',
  templateUrl: './add-deposit.component.html',
  styleUrls: ['./add-deposit.component.scss'],
})
export class AddDepositComponent implements OnInit {
  body = {
    id: 4,
    account: 'string',
    balance: 45.36,
    currency: 'USD',
  };

  constructor(private http: HttpClient) {}

  result: any;
  ngOnInit(): void {}

  addDeposit(
    id: number,
    accNumber: string,
    accBalance: number,
    currency: string
  ) {
    this.body.id = id;
    this.body.account = accNumber;
    this.body.balance = accBalance;
    this.body.currency = currency;
    this.http
      .post('http://localhost:8080/meicook-dev/client/addDeposit', this.body)
      .subscribe((res) => {
        console.log(res)
        this.result = JSON.stringify(res);
      });
  }
}
