import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HotelABCentral';

  constructor(private router: Router) {
  }
  ngOnInit(): void {
    console.log(this.router)
    window.addEventListener("scroll",function(){
      let offset=window.pageYOffset;
      var going =$(".goingUp");

      if(offset<1000){
        going.fadeOut("slow")

      }else{
        going.fadeIn("slow");


      }
    });
    
    $(".goingUp").click(function () {
      console.log("le he dado click")
      // ee.preventDefault();
      $("html, body").animate({
        scrollTop: 0
      }, 1000);
      return false;
    });
  }
  verifyRoute():boolean {
    return this.router.url !== '/login';
  }
}
