import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  standings: any[] = [];

  constructor(private http: HttpClient) {}

  ionViewDidEnter() {
    this.getStandings();
  }

  getStandings() {
    const url = 'https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=4328&s=2023-2024';

    this.http.get<any>(url)
      .subscribe({
        next: (response) => {
          this.standings = response.table;
        },
        error: (error) => {
          console.error(error);
        }
      });
  }
}
