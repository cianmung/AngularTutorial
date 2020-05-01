import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ng-style-tutorial",
  templateUrl: "./ng-style-tutorial.component.html",
  styleUrls: ["./ng-style-tutorial.component.css"],
})
export class NgStyleTutorialComponent {
  students: any[] = [
    {
      Name: "Preety",
      Branch: "CSE",
      Gender: "Female",
    },
    {
      Name: "Anurag",
      Branch: "ETC",
      Gender: "Male",
    },
    {
      Name: "Priyanka",
      Branch: "CSE",
      Gender: "Female",
    },
    {
      Name: "Hina",
      Branch: "ETC",
      Gender: "Female",
    },
    {
      Name: "Sambit",
      Branch: "CSE",
      Gender: "Male",
    },
  ];
}
