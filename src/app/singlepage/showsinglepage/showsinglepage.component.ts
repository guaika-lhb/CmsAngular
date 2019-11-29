import { Component, OnInit } from '@angular/core';
import { Singlepage } from '../../model/singlepage';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { SinglepageService } from '../../service/singlepage.service';

@Component({
  selector: 'app-showsinglepage',
  templateUrl: './showsinglepage.component.html',
  styleUrls: ['./showsinglepage.component.css']
})
export class ShowsinglepageComponent implements OnInit {

c2:Array<Singlepage>;
  

  constructor(
    private http:HttpClient,
    private routerinfo:ActivatedRoute,
    private router:Router,
    private singlepageService:SinglepageService

  ) { 
    this.c2=new Array();

  }

  ngOnInit() {
this.singlepageService.getSinglepageList()
.then((data:any)=>{
  this.c2=data;
})
    
  }

  addSinglepage(){
    this.router.navigate(['editsinglepage','add']);
  }

  updateSinglepage(id:string){
    this.router.navigate(['editsinglepage',id]);
  }

  deleteSinglepage(id:string){
   var r=confirm("确定删除吗？")
    if (r==true)
      {
this.singlepageService.deleteSinglepage(id)
    .then((flag:boolean)=>{
      if(flag==true){
        this.singlepageService.getSinglepageList();
       }else{
      alert("删除失败");
       }
     })
      }

}
}