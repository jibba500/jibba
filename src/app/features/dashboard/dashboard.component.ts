import { Component, OnInit } from '@angular/core';
import { LinkItem, LINK_ITEMS } from 'src/app/core/types/link-item';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  linkList: LinkItem[] = LINK_ITEMS;
  constructor() { }

  ngOnInit(): void {
  }

}
