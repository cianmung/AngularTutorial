import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-ng-routing-tutorial",
  templateUrl: "./ng-routing-tutorial.component.html",
  styleUrls: ["./ng-routing-tutorial.component.css"],
})
export class NgRoutingTutorialComponent {
  constructor(private router: Router) {}
  getStudent() {
    this.router.navigate(["/studentLink"]);
  }
  getStudentDetail() {
    this.router.navigate(["/studentdetailLink"]);
  }
}
