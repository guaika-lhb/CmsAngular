import { Component, OnInit } from '@angular/core';
import { Singlepage } from '../../model/singlepage';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { SinglepageService } from '../../service/singlepage.service';

@Component({
  selector: 'app-editsinglepage',
  templateUrl: './editsinglepage.component.html',
  styleUrls: ['./editsinglepage.component.css']
})
export class EditsinglepageComponent implements OnInit {
  parm:string;
  selectedFile:string;
  singlepage:Singlepage;
  constructor(
    private http:HttpClient,
    private router:Router,
    private routerinfo:ActivatedRoute,
    private singlepageservice:SinglepageService
  ) {
this.singlepage=new Singlepage();
this.parm=this.routerinfo.snapshot.params["id"];

   }

  ngOnInit() {
    if(this.parm=='add'){
      this.singlepage=new Singlepage();
    }else{
      this.getSinglepage(this.parm);
    }
  }


    
//     this.carouselservice.getCarouselList()
//     .then((data:any)=>{
//  this.c2=data;
//  console.log(this.c2[0].pic);
//    })





  save(){
    console.dir(this.singlepage);
    if(this.parm=='add'){
      this.addSinglepage();
    }else{
      this.updateSinglepage();
    }

}
goBack(){
  this.router.navigate(['showsinglepage']);
}

private getSinglepage(id:string){
  this.singlepageservice.getSinglepage(id)
  .then((data:Singlepage)=>{
    if(data){
      this.singlepage=data;
    }else{
      alert("数据异常，请刷新");
    }
  })

}



updateSinglepage(){
  this.singlepageservice.updateSinglepage(this.singlepage)
  .then((flag)=>{
    if(flag==true){
      this.goBack();
    }
    else{
      alert('修改异常');
    }


  })



}
addSinglepage(){
  this.singlepageservice.addSinglepage(this.singlepage)
  .then((flag:boolean)=>{
  if(flag==true){
    this.goBack();
  }else{
    alert("保存异常");
  }
  
  })
}




//onFileChanged(event) {
 // this.selectedFile = event.target.files[0];
//}

//onUpload() {

  //const uploadData = new FormData();
//uploadData.append('file', this.selectedFile);
//this.http.post('http://localhost/manage/tofileUpload',uploadData).subscribe(
 // (data:any)=>{
//let host="http://localhost/";
//this.singlepage.img=host+data.img;

  //},(err:HttpErrorResponse)=>{
   // console.log(err.message);
 // }
//)

//}
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
    this.singlepage.img=host+data.pic;
  },(err:HttpErrorResponse)=>{
    console.log(err.message);
  }
)

}
}