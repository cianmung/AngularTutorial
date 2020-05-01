import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ng-for-tutorial",
  templateUrl: "./ng-for-tutorial.component.html",
  styleUrls: ["./ng-for-tutorial.component.css"],
})
export class NgForTutorialComponent {
  students: any[] = [
    {
      ID: "std101",
      FirstName: "Preety",
      LastName: "Tiwary",
      Branch: "CSE",
      DOB: "29/02/1988",
      Gender: "Female",
    },
    {
      ID: "std102",
      FirstName: "Anurag",
      LastName: "Mohanty",
      Branch: "ETC",
      DOB: "23/05/1989",
      Gender: "Male",
    },
    {
      ID: "std103",
      FirstName: "Priyanka",
      LastName: "Dewangan",
      Branch: "CSE",
      DOB: "24/07/1992",
      Gender: "Female",
    },
    {
      ID: "std104",
      FirstName: "Hina",
      LastName: "Sharma",
      Branch: "ETC",
      DOB: "19/08/1990",
      Gender: "Female",
    },
    {
      ID: "std105",
      FirstName: "Sambit",
      LastName: "Satapathy",
      Branch: "CSE",
      DOB: "12/94/1991",
      Gender: "Male",
    },
  ];
}
