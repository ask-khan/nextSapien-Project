import { Component, OnInit } from '@angular/core';
import { CardLabelEnum } from '../enums/card-label.enum';
import { MenuItem } from '../interfaces/menu-item.interface';

@Component({
  selector: 'app-constituent-dashboard',
  templateUrl: './constituent-dashboard.component.html',
  styleUrl: './constituent-dashboard.component.css'
})
export class ConstituentDashboardComponent implements OnInit {
  items: MenuItem[] = []
  currentTab: MenuItem;
  cardLabelEnum: any

  constructor() {
    this.cardLabelEnum = CardLabelEnum;
  }
  ngOnInit(): void {
    this.items = [
      {
        label: "Lerom",
        Description: "Lerom Description"
      },
      {
        label: "Ipsum",
        Description: "Ipsum Description"
      },
      {
        label: "Dolor",
        Description: "Dolor Description"
      },

    ]
  }

  onActiveItemChange($event: MenuItem) {
    this.currentTab = $event
  }

}
