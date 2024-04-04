import { Component, HostListener, Renderer2 } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CollapseDirective } from 'ngx-bootstrap/collapse';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private renderer: Renderer2) {}

  collapsed = true;

  toggleNavbar() {
    this.collapsed = !this.collapsed;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
      this.renderer.addClass(navbar, 'solid-background');
    } else {
      this.renderer.removeClass(navbar, 'solid-background');
    }
  }

}
