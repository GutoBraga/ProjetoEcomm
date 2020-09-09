import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-carousel-items',
  templateUrl: './carousel-items.component.html',
  styleUrls: ['./carousel-items.component.css']
})
export class CarouselItemsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function() {
      $('.autoWidth').lightSlider({
          item:4,
          loop:false,
          slideMove:2,
          easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
          speed:600,
          responsive : [
              {
                  breakpoint:800,
                  settings: {
                      item:3,
                      slideMove:1,
                      slideMargin:6,
                    }
              },
              {
                  breakpoint:480,
                  settings: {
                      item:1,
                      slideMove:1
                    }
              }
          ],
          onSliderLoad: function() {
              $('.autoWidth').removeClass('cS-hidden');
          } 
      });  
    });
  }

}
