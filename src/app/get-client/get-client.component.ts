import { Component, OnInit } from '@angular/core';
import { Apollo, ApolloBase, gql } from 'apollo-angular';

@Component({
  selector: 'app-get-client',
  templateUrl: './get-client.component.html',
  styleUrls: ['./get-client.component.scss'],
})
export class GetClientComponent {
  public result: any;

  GET_Client = gql`
    query ($id: ID!) {
      getClient(id: $id) {
        fName
        lName
        account {
          account
          balance
          currency
        }
      }
    }
  `;

  private apollo: ApolloBase;
  constructor(private apolloProvider: Apollo) {
    this.apollo = this.apolloProvider.use('newClientName');
  }
  searchClient(clientid: number) {
    this.apollo
      .watchQuery({
        query: this.GET_Client,
        variables: {
          id: clientid,
        },
      })
      .valueChanges.subscribe((result: any) => {
        console.log(result);
        this.result = JSON.stringify(result);
      });
  }
}
