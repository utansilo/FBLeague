import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-club-detail',
  templateUrl: './club-detail.page.html',
  styleUrls: ['./club-detail.page.scss'],
})
export class ClubDetailPage implements OnInit {
  teamIndex: number = 0;
  teamDetail: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.teamIndex = +params.get('index')!;
      // Panggil fungsi untuk mendapatkan detail klub berdasarkan teamId
      this.getTeamDetail();
    });
  }

  getTeamDetail() {
    const url = `https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League`;

    this.http.get<any>(url).subscribe((response) => {
      const teams = response.teams;
      this.teamDetail = teams[this.teamIndex];
    })
  }
}
