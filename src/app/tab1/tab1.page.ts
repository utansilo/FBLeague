import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  teams: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ionViewDidEnter() {
    this.getTeams();
  }

  getTeams() {
    const url = 'https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League';

    this.http.get<any>(url)
      .subscribe({
        next: (response) => {
          this.teams = response.teams;
        },
        error: (error) => {
          console.error(error);
        }
      });
  }
  onSelectTeam(team: any) {
    this.router.navigate(['/club-detail', team.idTeam]);
  }
}
