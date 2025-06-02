import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from "./main/main.component";

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../styles.scss'],
  imports: [MainComponent]
})
export class AppComponent {
  title = 'dolcePage';
}
