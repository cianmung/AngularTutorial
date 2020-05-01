import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ng-class-tutorial",
  templateUrl: "./ng-class-tutorial.component.html",
  styleUrls: ["./ng-class-tutorial.component.css"],
})
export class NgClassTutorialComponent {
  AddCSSClasses(flag: string) {
    let Cssclasses;
    if (flag == "type1") {
      Cssclasses = {
        one: true,
        two: true,
      };
    } else {
      Cssclasses = {
        four: true,
        five: true,
      };
    }
    return Cssclasses;
  }
}
