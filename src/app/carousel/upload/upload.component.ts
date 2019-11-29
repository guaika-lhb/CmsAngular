import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { CarouselService } from '../../service/carousel.service';
import { Carousel } from '../../model/carousel';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {


  cl:Array<Carousel>;
  constructor(private  http:HttpClient,
    private routerinfo:ActivatedRoute,
    private router:Router,
    private carouselservice:CarouselService
    
    ) {
      this.cl=new Array();
    }

  ngOnInit() {
    this.loadCarouselList();

  }

  private loadCarouselList(){
    this.cl=new Array();
    
      this.carouselservice.getCarouselList()
      .then((data:any)=>{
        this.cl=data;
    
      })
    }
  

 


  addCarousel(){
    this.router.navigate(['eidtCarousel','add']);
  }

  updateCarousel(id:string){
    this.router.navigate(['eidtCarousel',id]);
      }


  deleteCarousel(id:string){

    this.carouselservice.deleteCarousel(id)
    .then((flag:boolean)=>{
     if(flag==true){
  this.loadCarouselList();


     }
     else{

      alert("删除异常，请刷新后重试");
     }



    })



  }


}
