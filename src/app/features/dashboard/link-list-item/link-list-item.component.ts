import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { LinkItem } from 'src/app/core/types/link-item';

@Component({
  selector: 'app-link-list-item',
  templateUrl: './link-list-item.component.html',
  styleUrls: ['./link-list-item.component.scss']
})
export class LinkListItemComponent implements OnInit {

  @Input() linkItem: LinkItem;
  constructor() { }

  ngOnInit(): void {
  }

  route() {
    window.location.href = this.linkItem.link;
  }
}
