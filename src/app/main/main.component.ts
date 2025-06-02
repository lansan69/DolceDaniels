import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";

@Component({
  selector: 'app-main',
  imports: [HeroComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
