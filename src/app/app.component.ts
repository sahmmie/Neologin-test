import { Component, OnInit } from "@angular/core";
import neologin from "neologin";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "neologin-angular";
  constructor() {}
  ngOnInit() {
    // neologin.getAccount().then((account) => {
    //   console.log("Provider address: " + account.address);
    // });
  }
}
