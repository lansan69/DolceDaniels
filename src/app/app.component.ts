import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from "./main/main.component";
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../styles.scss'],
  imports: [MainComponent, FooterComponent]
})
export class AppComponent {
  title = 'dolcePage';
}
