import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-withdraw-deposit',
  templateUrl: './withdraw-deposit.component.html',
  styleUrls: ['./withdraw-deposit.component.scss']
})
export class WithdrawDepositComponent implements OnInit {
  body = {
    id: 4,
    account: 'string',
    balance: 45.36,
    currency: 'USD',
  };
  result: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  withdrawDeposit(
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
      .post('http://localhost:8080/meicook-dev/client/withDrawDeposit', this.body)
      .subscribe((res) => {
        console.log(res)
        this.result = JSON.stringify(res);
      });
  }
}
