import { StudentService } from "./student.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ng-service-tutorial",
  templateUrl: "./ng-service-tutorial.component.html",
  styleUrls: ["./ng-service-tutorial.component.css"],
  providers: [StudentService],
})
export class NgServiceTutorialComponent {
  students: any[];
  title: string;
  constructor(private _studentService: StudentService) {}

  ngOnInit() {
    this.students = this._studentService.getStudents();
    this.title = this._studentService.getTitle();
  }
}
