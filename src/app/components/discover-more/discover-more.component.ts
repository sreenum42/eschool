import { Component, OnInit } from '@angular/core';
import { DiscoverMore } from '../../model/discover-more.model';
import { DiscoverMoreService } from "../../providers/discover-more.service";
@Component({
  selector: 'es-discover-more',
  templateUrl: './discover-more.component.html',
  styleUrls: ['./discover-more.component.scss'],
  providers: [DiscoverMoreService]
})
export class DiscoverMoreComponent implements OnInit {
  discoverMoreItems: DiscoverMore[];
  constructor(private _discoverMoreService: DiscoverMoreService) {
    this.discoverMoreItems = [];
  }

  ngOnInit() {
    this.discoverMoreItems = this._discoverMoreService.getDiscoverMoreItems();
  }

}
