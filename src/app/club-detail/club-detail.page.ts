import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-club-detail',
  templateUrl: './club-detail.page.html',
  styleUrls: ['./club-detail.page.scss'],
})
export class ClubDetailPage implements OnInit {
  teamId: string = '';
  teamDetail: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
  const state = history.state;
  const team = state?.team;

  if (team) {
    this.teamId = team.id;
    this.getTeamDetail();
  }
}

getTeamDetail() {
  const url = `https://www.thesportsdb.com/api/v1/json/3/lookupteam.php?id=${this.teamId}`;

  this.http.get<any>(url)
    .subscribe({
      next: (response) => {
        this.teamDetail = response.teams[0];
      },
      error: (error) => { 
        console.error(error); 
      }
    })
}

}
