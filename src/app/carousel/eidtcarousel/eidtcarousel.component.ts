import { Component, OnInit } from '@angular/core';
import { Carousel } from '../../model/carousel';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CarouselService } from '../../service/carousel.service';

@Component({
  selector: 'app-eidtcarousel',
  templateUrl: './eidtcarousel.component.html',
  styleUrls: ['./eidtcarousel.component.css']
})
export class EidtcarouselComponent implements OnInit {
  carousel:Carousel;
  parm:string;
  selectedFile:string;

  constructor(
    private http:HttpClient,
    private router:Router,
    private routerinfo:ActivatedRoute,
    private carouselservice:CarouselService
  ) { 
    this.carousel=new Carousel();
    this.parm=this.routerinfo.snapshot.params['id'];
  }

  ngOnInit() {
    if(this.parm!='add'){
      this.getCarousel(this.parm);
    }

  }

    save(){
    console.dir(this.carousel);
    if(this.parm=='add'){
      this.addCarousel();
    }
    else{
      this.updateCarousel();
    }

      
      //this.carouselservice.addCarousel(this.carousel)
      //.then((flag:boolean)=>{
 // if(flag==true){
  
    //alert('成功');
    
  //}
  //else{
   // alert('失败');
  //}
  
      //})
     
     // this.router.navigate(['uploadfile']);
      
  
  
  }

    private addCarousel(){

      this.carouselservice.addCarousel(this.carousel)
      .then((flag:boolean)=>{
       if(flag==true){
         this.goBack();
       }
       else{
         alert('保存异常，请刷新后重试');
       }
  
  
  
      })
  
  
     }

    private updateCarousel(){
      this.carouselservice.updateCarousel(this.carousel)
      .then((flag:boolean)=>{
        if(flag==true){
          this.goBack();
        }
        else{
          alert('保存异常，请刷新后重试！');
        }
      })
    }

    private getCarousel(id:string){
      this.carouselservice.getCarousel(id)
      .then((data:Carousel)=>{
        if(data){
          this.carousel=data;
        }
        else{
          alert('通讯异常，请刷新后重试');
        }
      })
    }


    goBack(){

      this.router.navigate(['uploadfile']);
    
      }

     
    
 

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    //this.onUpload();
  }

  onUpload() {
    // upload code goes here

    const uploadData = new FormData();
  uploadData.append('file', this.selectedFile);

  this.http.post('http://localhost:81/manage/fileUpload',uploadData).subscribe(
    (data:any)=>{
     //alert(data);
     // console.log(JSON.stringify(data));
   let host="http://localhost:81/public/";
      this.carousel.pic=host+data.pic;
    },(err:HttpErrorResponse)=>{
      console.log(err.message);
    }
  )

  }

}
