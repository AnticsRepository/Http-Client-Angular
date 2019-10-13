import { Component, OnInit } from '@angular/core';
import { JokesService } from './core/services/jokes/jokes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  joke: string;

  constructor(private jokesService: JokesService) { }

  ngOnInit() {
    this.jokesService.getJokes()
    .subscribe((res: any) => this.joke = res.value);
   }

}
