import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JuicyWebSite';
  constructor(private el: ElementRef) {}

  ngOnInit() {
    // Vous pouvez ajouter une logique d'initialisation ici si nécessaire
  }

  scrollToSection(target: string) {
    const element = this.el.nativeElement.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
