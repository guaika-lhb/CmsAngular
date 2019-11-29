import { Component, OnInit } from '@angular/core';
import { Student } from '../../model/Student';
import { CourseService } from '../../service/course.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

   s:Student;
   sl:Array<Student>


  
   
   constructor(private courseservice:CourseService) {
    this.s= new Student();
   }

   ngOnInit() {
     this.loadStudentList();
  }

  addStudent(){
    this.s =new Student();
  }

  save(){

    if(this.s.id){
      this.update();
    }
    else{
      this.add();
    }

  }


  add(){
   this.courseservice.addStudent(this.s)
   .then((flag:boolean)=>{

   if(flag== true){
     this.s =new Student();
     this.loadStudentList()
   }
   else{
     alert("添加异常，请重试");
   }

   })



  }

  update(){

    this.courseservice.updateStudent(this.s)
    .then((flag:boolean)=>{
     if(flag == true){
       this.s= new Student();
       this.loadStudentList();
     }
     else{
       alert("修改异常，请重试");
     }

    })

  }


  toupdate(x:Student){
    this.s=x;
  }


  deleteStudent(x:Student){
   this.courseservice.deleteStudent(x)
   .then((flag:boolean)=>{

    if(flag == true){
      this.loadStudentList();
    }
    else{

      alert("删除异常，请重试");
    }

   })

  }


  loadStudentList(){
    this.sl= new Array();
    this.courseservice.getStudentList()
    .then((data:any)=>{

      this.sl = data;


    })


  }



}