import { Component, OnInit } from '@angular/core';
import { Teacher } from '../../model/teacher';
import { CourseService } from '../../service/course.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  h:Teacher;
  hl:Array<Teacher>

  constructor(private courseservice:CourseService) {
    this.h= new Teacher();
   }

  ngOnInit() {
    this.loadTeacherList();
  }

  addTeacher(){
    this.h =new Teacher();
  }

  save(){

    if(this.h.id){
      this.update();
    }
    else{
      this.add();
    }

  }


  add(){
   this.courseservice.addTeacher(this.h)
   .then((flag:boolean)=>{

   if(flag== true){
     this.h =new Teacher();
     this.loadTeacherList()
   }
   else{
     alert("添加异常，请重试");
   }

   })



  }

  update(){

    this.courseservice.updateTeacher(this.h)
    .then((flag:boolean)=>{
     if(flag == true){
       this.h= new Teacher();
       this.loadTeacherList();
     }
     else{
       alert("修改异常，请重试");
     }

    })

  }


  toupdate(x:Teacher){
    this.h=x;
  }


  deleteTeacher(x:Teacher){
   this.courseservice.deleteTeacher(x)
   .then((flag:boolean)=>{

    if(flag == true){
      this.loadTeacherList();
    }
    else{

      alert("删除异常，请重试");
    }

   })

  }


  loadTeacherList(){
    this.hl= new Array();
    this.courseservice.getTeacherList()
    .then((data:any)=>{

      this.hl = data;


    })


  }



}