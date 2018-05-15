import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { IStudent } from '../../models/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students:IStudent[];
  errorMessage:string;
  studentId:number;

  constructor(private studentService:StudentService,private router:Router) { }

  ngOnInit() {
     this.studentService.getStudents().subscribe((data:any)=>{
       console.log("in initial")
            this.students=data.students;
            if(this.students.length==0){
              alert('No students enrolled yet');
            }
     },error=>{
       this.errorMessage=<any>error;
     })
  }

  openAddStudentPage(){
    this.router.navigate(['addStudent']);
  }

  searchStudent(){
    console.log(this.studentId)
     if(this.studentId<0||(this.studentId===void(0)||isNaN(this.studentId))){
       alert("Student id not valid");
       return;
     }
       this.studentService.getStudentById(this.studentId).subscribe((data)=>{
            this.students=[];
            this.students.push(data.student);
       },error=>{
         alert(error)
       })
  }
}
