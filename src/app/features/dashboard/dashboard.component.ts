import { Component, OnInit } from '@angular/core';
import { LinkItem, LINK_ITEMS } from 'src/app/core/types/link-item';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  soundcloud: LinkItem = { title: 'Endlich', link: 'https://soundcloud.com/user-74152219/sets/jibba-endlich-pre-listening/s-X8vsbsfRX69?fbclid=IwAR1vsTCwkR6n-yNcJgdw-de7mn_musj_arf-iqvEubiYBdhU7Pyc0-QWJFg' };
  constructor() { }

  ngOnInit(): void {
  }

}
