import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  matches: any[] = [];

  constructor(private http: HttpClient) {}

  ionViewDidEnter() {
    this.getMatches();
  }

  getMatches() {
    const url = 'https://www.thesportsdb.com/api/v1/json/3/eventsseason.php?id=4328&s=2023-2024';

    this.http.get<any>(url)
      .subscribe({
        next: (response) => {
          this.matches = response.events;
        },
        error: (error) => {
          console.error(error);
        }
      });
  }
}
