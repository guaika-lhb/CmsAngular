import { Component, OnInit } from '@angular/core';
import { Classroom } from '../../model/classroom';
import { CourseService } from '../../service/course.service';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent implements OnInit {
  r:Classroom;
  rl:Array<Classroom>
  



  constructor(private courseservice:CourseService) {
    this.r= new Classroom();
   }

  ngOnInit() {
    this.loadClassroomList();
  }

  addClassroom(){
    this.r =new Classroom();
  }

  save(){

    if(this.r.id){
      this.update();
    }
    else{
      this.add();
    }

  }


  add(){
   this.courseservice.addClassroom(this.r)
   .then((flag:boolean)=>{

   if(flag== true){
     this.r =new Classroom();
     this.loadClassroomList()
   }
   else{
     alert("添加异常，请重试");
   }

   })



  }

  update(){

    this.courseservice.updateClassroom(this.r)
    .then((flag:boolean)=>{
     if(flag == true){
       this.r= new Classroom();
       this.loadClassroomList();
     }
     else{
       alert("修改异常，请重试");
     }

    })

  }


  toupdate(x:Classroom){
    this.r=x;
  }


  deleteClassroom(x:Classroom){
   this.courseservice.deleteClassroom(x)
   .then((flag:boolean)=>{

    if(flag == true){
      this.loadClassroomList();
    }
    else{

      alert("删除异常，请重试");
    }

   })

  }


  loadClassroomList(){
    this.rl= new Array();
    this.courseservice.getClassroomList()
    .then((data:any)=>{

      this.rl = data;


    })


  }



}