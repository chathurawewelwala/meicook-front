import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetClientRoutingModule } from './get-client-routing.module';
import { GetClientComponent } from './get-client.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, APOLLO_NAMED_OPTIONS, NamedOptions } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';

@NgModule({
  declarations: [GetClientComponent],
  imports: [
    CommonModule,
    GetClientRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    ApolloModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: APOLLO_NAMED_OPTIONS,
      useFactory(httpLink: HttpLink): NamedOptions {
        return {
          newClientName: {
            cache: new InMemoryCache(),
            link: httpLink.create({
              uri: 'http://localhost:8080/meicook-dev/graphql',
            }),
          },
        };
      },
      deps: [HttpLink],
    },
  ],
})
export class GetClientModule {}
