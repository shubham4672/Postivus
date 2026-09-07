import { Component, input } from '@angular/core';
import { Team } from '../../modals/Team.modal';

@Component({
  selector: 'app-team-card',
  imports: [],
  templateUrl: './team-card.component.html',
  styleUrl: './team-card.component.scss'
})
export class TeamCardComponent {
  member = input<Team>();
}
