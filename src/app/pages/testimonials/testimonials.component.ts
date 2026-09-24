import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { HeadingComponent } from '../../shared/components/heading/heading.component';
import Swiper from 'swiper';
import { Review } from '../../shared/modals/Review.modal';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-testimonials',
  imports: [HeadingComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent implements OnInit, AfterViewInit {
  reviews: Review[] = [];
  private http = inject(HttpClient);
  ngOnInit(): void {
    this.http
      .get<Review[]>('/data/reviews.json')
      .subscribe((data) => (this.reviews = data));
  }

  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper', {
      slidesPerView: 2.5,
      spaceBetween: 50,
      speed: 500,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 1000,
      },
    });
  }
}
