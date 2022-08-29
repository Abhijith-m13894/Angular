import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'carousel';
  images = [
    { path: "assets/images/1.jpg", alt: "Sample Text 1", caption: "Caption 1", description: "Description for sample text 1" },
    { path: "assets/images/2.jpg", alt: "Sample Text 2", caption: "Caption 2", description: "Description for sample text 2" },
    { path: "assets/images/3.jpg", alt: "Sample Text 3", caption: "Caption 3", description: "Description for sample text 3" },
  ]
}
