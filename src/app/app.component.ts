import { Component } from '@angular/core';
import { MenuItems } from './constants/menu-item';
import { MenuItem } from './models/menu-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public readonly menuItems: MenuItem[] = MenuItems;

  constructor() {}
}
