import { Component } from '@angular/core';


@Component({
  selector: 'app-shop',
  imports: [],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {

  activeSection: 'cremas' | 'jugos' = 'cremas'; // default

  setActive(section: 'cremas' | 'jugos') {
    this.activeSection = section;
  }

}
