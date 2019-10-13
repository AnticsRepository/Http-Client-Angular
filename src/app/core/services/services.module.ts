import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http/http.service';
import { JokesService } from './jokes/jokes.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    HttpService,
    JokesService
  ]
})

export class ServicesModule { }
