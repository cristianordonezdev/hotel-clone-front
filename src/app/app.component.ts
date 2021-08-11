import { Component } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HotelABCentral';

  constructor(){
    

  }
  ngOnInit(): void {

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
}
