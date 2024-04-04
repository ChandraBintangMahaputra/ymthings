import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('carousel1') carousel1!: ElementRef;
  @ViewChild('carousel2') carousel2!: ElementRef;

  ngAfterViewInit(): void {
    // Inisialisasi carousel pertama
    new bootstrap.Carousel(this.carousel1.nativeElement, {
      interval: 2000
    });

    // Inisialisasi carousel kedua
    new bootstrap.Carousel(this.carousel2.nativeElement, {
      interval: 2000
    });
  }
}