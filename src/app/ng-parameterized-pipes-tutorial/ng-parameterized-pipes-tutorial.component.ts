import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ng-parameterized-pipes-tutorial",
  templateUrl: "./ng-parameterized-pipes-tutorial.component.html",
  styleUrls: ["./ng-parameterized-pipes-tutorial.component.css"],
})
export class NgParameterizedPipesTutorialComponent {
  today: number = Date.now();
  salary: number = 4567.89;
}
