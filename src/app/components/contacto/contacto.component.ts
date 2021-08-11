import { Component, OnInit } from '@angular/core';
import {NgwWowService} from "ngx-wow";
import { UserService} from '../../services/userService';
import { Model} from '../../models/model';

declare var $:any;


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  providers :[UserService]
})
export class ContactoComponent implements OnInit {
  public user: Model;
  public status:string;
  constructor(private wowService : NgwWowService,
              private _userService : UserService
        ) { 
          this.user = new Model("","","","","");
          this.status = "failed";  
  }

  ngOnInit(): void {
    this.wowService.init();
    window.addEventListener("scroll",function(){
      let offset=window.pageYOffset;
      $(".parallax").css("background-position-y",offset * 0.7 +'px');

    });
  }

  onSubmit(form:any){
    console.log(this.user);  
    this._userService.saveUser(this.user).subscribe(
      response =>{

        form.reset();
        $('.alert').css("display",'block');
      },
      error =>{
        console.log(error);
      }
    )

  }
    
  
  
  }


