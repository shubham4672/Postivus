import { Component, inject, OnInit } from '@angular/core';
import { HeadingComponent } from '../../shared/components/heading/heading.component';
import { HttpClient } from '@angular/common/http';
import { Team } from '../../shared/modals/Team.modal';
import { TeamCardComponent } from "../../shared/components/team-card/team-card.component";
import { ButtonComponent } from "../../shared/components/button/button.component";

@Component({
  selector: 'app-team-page',
  imports: [HeadingComponent, TeamCardComponent, ButtonComponent],
  templateUrl: './team-page.component.html',
  styleUrl: './team-page.component.scss',
})
export class TeamPageComponent implements OnInit {
  private http = inject(HttpClient);
  teams: Team[] = [];

  ngOnInit(): void {
    this.http.get<Team[]>('/data/members.json').subscribe((data) => {
      this.teams = data;
    });
  }
}
