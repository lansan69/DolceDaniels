import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  private mediaQuery!: MediaQueryList;
  private listener!: (event: MediaQueryListEvent) => void;

  ngOnInit() {
    this.mediaQuery = window.matchMedia('(max-width: 600px) and (min-height: 600px)');

    // Initial check
    if (this.mediaQuery.matches) {
      this.activateFunction();
    }

    // Listen for changes
    this.listener = (event: MediaQueryListEvent) => {
      if (event.matches) {
        this.activateFunction();
      } else {
        this.deactivateFunction();
      }
    };

    this.mediaQuery.addEventListener('change', this.listener);
  }

  ngOnDestroy() {
    this.mediaQuery.removeEventListener('change', this.listener);
  }

activateFunction() {
  console.log('Media query condition met ✅');

  const container = document.querySelector('.products-container-jugos');
  const jugosText = document.querySelector('.products-container-jugos-text');
  const jugosImage = document.querySelector('.products-container-jugos-image');

  if (container && jugosText && jugosImage) {
    // Move text AFTER the image
    container.insertBefore(jugosText, jugosImage.nextSibling);
  }
}

deactivateFunction() {
  console.log('Media query condition no longer met ❌');

  const container = document.querySelector('.products-container-jugos');
  const jugosText = document.querySelector('.products-container-jugos-text');
  const jugosImage = document.querySelector('.products-container-jugos-image');

  if (container && jugosText && jugosImage) {
    // Restore text BEFORE the image
    container.insertBefore(jugosText, jugosImage);
  }
}

}
