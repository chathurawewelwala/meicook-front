import { Component, OnInit } from '@angular/core';
import { gql, ApolloBase, Apollo } from 'apollo-angular';

@Component({
  selector: 'app-get-all-client',
  templateUrl: './get-all-client.component.html',
  styleUrls: ['./get-all-client.component.scss'],
})
export class GetAllClientComponent implements OnInit {
  public result: any;

  GET_Client = gql`
    query {
      getAllClient {
        fName
        lName
      }
    }
  `;

  private apollo: ApolloBase;
  constructor(private apolloProvider: Apollo) {
    this.apollo = this.apolloProvider.use('newClientName');
  }

  ngOnInit(): void {}
  searchAllClient() {
    this.apollo
      .watchQuery({
        query: this.GET_Client,
      })
      .valueChanges.subscribe((result: any) => {
        console.log(result);
        this.result = JSON.stringify(result);
      });
  }
}
