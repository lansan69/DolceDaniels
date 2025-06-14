import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ProductsComponent } from "./products/products.component";

@Component({
  selector: 'app-main',
  imports: [HeroComponent, AboutUsComponent, ProductsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
