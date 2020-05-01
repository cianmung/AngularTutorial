import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ng-if-tutorial",
  templateUrl: "./ng-if-tutorial.component.html",
  styleUrls: ["./ng-if-tutorial.component.css"],
})
export class NgIfTutorialComponent {
  isValid: boolean = true;
  ChangeData(valid: boolean) {
    this.isValid = valid;
  }
}
