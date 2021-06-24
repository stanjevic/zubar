import { Component, Input } from '@angular/core';
import { Usluge } from 'src/app/models/usluge.model';

@Component({
  selector: 'app-usluge-card',
  templateUrl: './usluge-card.component.html',
  styleUrls: ['./usluge-card.component.scss'],
})
export class UslugeCardComponent {

  @Input() item: Usluge;

}