import { Component, OnInit } from '@angular/core';

import { DataHome } from './shared/models/data-home.model';

import { HomeService } from './shared/services/home.service';

@Component({
  selector: 'app-home',
  providers: [HomeService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public clients: DataHome[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.dataClient();
  }

  public dataClient(): void {
    this.homeService.findAll().subscribe(
      (response) => {
        this.clients = response;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
