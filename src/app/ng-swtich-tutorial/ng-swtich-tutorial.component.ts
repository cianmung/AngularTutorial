import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ng-swtich-tutorial",
  templateUrl: "./ng-swtich-tutorial.component.html",
  styleUrls: ["./ng-swtich-tutorial.component.css"],
})
export class NgSwtichTutorialComponent {
  public dropDownValue = "";
  SetDropDownValue(drpValue: any) {
    this.dropDownValue = drpValue.target.value;
  }
}
