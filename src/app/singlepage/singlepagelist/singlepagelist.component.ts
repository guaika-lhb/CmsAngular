import { Component, OnInit } from '@angular/core';
import { Singlepage } from '../../model/singlepage';
import { SinglepageService } from '../../service/singlepage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singlepagelist',
  templateUrl: './singlepagelist.component.html',
  styleUrls: ['./singlepagelist.component.css']
})
export class SinglepagelistComponent implements OnInit {
  sl:Array<Singlepage>;

  constructor(private singleservice:SinglepageService,
    private router:Router) {
    this.sl=new Array();
    


   }

  ngOnInit( ) {
    this.loadSinglelist()

  }

  private loadSinglelist(){
    this.sl=new Array();
    this.singleservice.getSinglepageList()
    .then((data:any)=>{
      this.sl=data;
      console.log(this.sl[0].img);
    })
  }

  toDateil(id:string){
    this.router.navigate(['usersinglepage',id]);
  
  }


}